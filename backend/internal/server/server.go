package server

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
)

type Server struct {
	Router *chi.Mux
}

func New() *Server {
	return &Server{Router: chi.NewRouter()}
}

func (s *Server) Start(host string, port int) error {
	addr := fmt.Sprintf("%s:%d", host, port)
	return http.ListenAndServe(addr, s.Router)
}
