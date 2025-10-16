package middleware

import (
	"expvar"
	"net/http"
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
	mu       sync.Mutex
	config   RateLimitConfig
}

type visitor struct {
	limiter  rate.Limiter
	lastSeen time.Time
}

var mu sync.Mutex

func getVisitor(ip string) *rate.Limiter {
	mu.Lock()
	defer mu.Unlock()
	limiter, exists := visitors[ip]
	if !exists {
		limiter = rate.NewLimiter(1, 5)
		visitors[ip] = limiter
	}

	return limiter
}

func RateLimit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ip := r.RemoteAddr
		limiter := getVisitor(ip)
		if !limiter.Allow() {
			http.Error(w, http.StatusText(http.StatusTooManyRequests), http.StatusTooManyRequests)
			return
		}

		next.ServeHTTP(w, r)
	})
}
