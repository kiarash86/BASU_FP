package main

import (
	"log"

	"github.com/Reza-namvaran/BASU_FP/internal/config"
	"github.com/Reza-namvaran/BASU_FP/internal/handlers"
	"github.com/Reza-namvaran/BASU_FP/internal/middleware"
	"github.com/Reza-namvaran/BASU_FP/internal/server"
)

func main() {
	cfg := config.Load()

	srv := server.New()
	srv.Router.Use(middleware.Logger)
	srv.Router.Get("/api/health", handlers.HealthHandler)

	log.Printf("Server running on %s:%d", cfg.Server.Host, cfg.Server.Port)
	if err := srv.Start(cfg.Server.Host, cfg.Server.Port); err != nil {
		log.Fatal("Server error:", err)
	}
}
