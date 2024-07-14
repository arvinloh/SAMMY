package handlers

import (
    "context"
    "encoding/json"
    "net/http"
    "os"
    "time"

    "comments-backend/models"
    "github.com/gorilla/mux"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "log"
)

var client *mongo.Client

func init() {
    clientOptions := options.Client().ApplyURI(os.Getenv("mongodb://host:27017/sammydatabase"))
    client, err := mongo.Connect(context.Background(), clientOptions)
    if err != nil {
        log.Fatal(err)
    }
}

func CreateComment(w http.ResponseWriter, r *http.Request) {
    var comment models.Comment
    json.NewDecoder(r.Body).Decode(&comment)
    comment.CreatedAt = primitive.NewDateTimeFromTime(time.Now())
    
    collection := client.Database("SAMMY_DB").Collection("comments")
    _, err := collection.InsertOne(context.Background(), comment)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    json.NewEncoder(w).Encode(comment)
}

func GetComments(w http.ResponseWriter, r *http.Request) {
    var comments []models.Comment
    
    collection := client.Database("SAMMY_DB").Collection("comments")
    cursor, err := collection.Find(context.Background(), bson.D{})
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer cursor.Close(context.Background())
    
    for cursor.Next(context.Background()) {
        var comment models.Comment
        cursor.Decode(&comment)
        comments = append(comments, comment)
    }
    
    if err := cursor.Err(); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    json.NewEncoder(w).Encode(comments)
}
