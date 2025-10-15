package config

import (
	"log"

	"github.com/ilyakaznacheev/cleanenv"
	"github.com/joho/godotenv"
)

type Config struct {
	Server struct {
		Host string `env:"SERVER_HOST" env-default:"0.0.0.0"`
		Port int    `env:"SERVER_PORT" env-default:"8080"`
	}

	Database struct {
		DSN string `env:"DATABASE_DSN" env-required:"true"`
	}

	Storage struct {
		UploadPath string `env:"UPLOAD_PATH" env-required:"true"`
	}
}

func Load() *Config {
	_ = godotenv.Load()

	var cfg Config
	if err := cleanenv.ReadEnv(&cfg); err != nil {
		log.Fatal("config error: ", err)
	}

	return &cfg
}
