package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Comment struct {
    ID      primitive.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
    User    string             `bson:"user" json:"user"`
    Content string             `bson:"content" json:"content"`
    CreatedAt primitive.DateTime `bson:"createdAt" json:"createdAt"`
}
