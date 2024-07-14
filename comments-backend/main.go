package main

import (
    "comments-backend/handlers"
    "log"
    "net/http"
    "os"

    "github.com/gorilla/mux"
    "github.com/joho/godotenv"
)

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    router := mux.NewRouter()
    
    router.HandleFunc("/comments", handlers.CreateComment).Methods("POST")
    router.HandleFunc("/comments", handlers.GetComments).Methods("GET")

    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    
    log.Printf("Server started at port %s", port)
    log.Fatal(http.ListenAndServe(":"+port, router))
}
