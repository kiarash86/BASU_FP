package middleware

import (
	"context"
	"expvar"
	"net/http"
	"strings"
	"sync"
	"time"

	"github.com/hashicorp/golang-lru/v2"
	"golang.org/x/time/rate"
)

type RateLimitConfig struct {
	Rate            rate.Limit
	Burst           int
	TTL             time.Duration // Time after which inactive IPs are removed
	MaxEntries      int
	CleanUpInterval time.Duration
}

type RateLimiter struct {
	visitors *lru.Cache[string, *visitor]
	config   RateLimitConfig
	mu       sync.Mutex
	metrics  *expvar.Map
}

type visitor struct {
	limiter  *rate.Limiter
	lastSeen time.Time
}

func NewRateLimiter(ctx context.Context, config RateLimitConfig) (*RateLimiter, error) {
	max := config.MaxEntries
	if max <= 0 {
		max = 1000
	}
	cache, err := lru.New[string, *visitor](max)
	if err != nil {
		return nil, err
	}

	rl := &RateLimiter{
		visitors: cache,
		config:   config,
		metrics:  expvar.NewMap("rate_limiter"),
	}

	go rl.cleanup(ctx)
	return rl, nil
}

func (rl *RateLimiter) cleanup(ctx context.Context) {
	interval := rl.config.CleanUpInterval
	if interval == 0 {
		interval = rl.config.TTL
	}
	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return // Graceful exit on shutdown
		case now := <-ticker.C:
			rl.mu.Lock()
			keys := rl.visitors.Keys()
			for _, ip := range keys {
				v, ok := rl.visitors.Peek(ip)
				if ok && now.Sub(v.lastSeen) < rl.config.TTL {
					rl.visitors.Remove(ip)
				}
			}

			rl.updateMetrics()
			rl.mu.Unlock()
		}
	}
}

func (rl *RateLimiter) getVisitor(ip string) *rate.Limiter {
	rl.mu.Lock()
	defer rl.mu.Unlock()

	v, exists := rl.visitors.Get(ip)
	if !exists {
		limiter := rate.NewLimiter(rl.config.Rate, rl.config.Burst)
		v = &visitor{limiter: limiter, lastSeen: time.Now()}
		rl.visitors.Add(ip, v)
	} else {
		v.lastSeen = time.Now()
	}

	rl.updateMetrics()
	return v.limiter
}

func (rl *RateLimiter) updateMetrics() {
	rl.metrics.Set("CacheSize", expvar.Func(func() interface{} { return len(rl.visitors.Keys()) }))
}

func (rl *RateLimiter) RateLimit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ip := r.RemoteAddr
		if forwarded := r.Header.Get("X-Forwarded-For"); forwarded != "" {
			ip = strings.Split(forwarded, ",")[0]
		}
		if idx := strings.LastIndex(ip, ":"); idx != -1 {
			ip = ip[:idx]
		}

		limiter := rl.getVisitor(ip)
		if !limiter.Allow() {
			w.Header().Set("Retry-After", "5")
			http.Error(w, http.StatusText(http.StatusTooManyRequests), http.StatusTooManyRequests)
			return
		}

		next.ServeHTTP(w, r)
	})
}
