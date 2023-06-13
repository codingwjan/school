package main

import (
	"context"
	"encoding/json"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net/http"
)

type GroceryItem struct {
	Name  string `bson:"name,omitempty"`
	Count int    `bson:"count,omitempty"`
}

func main() {
	// Set client options
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection := client.Database("test").Collection("grocery")

	item := GroceryItem{"apple", 5}

	insertResult, err := collection.InsertOne(context.TODO(), item)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Document: ", insertResult.InsertedID)

	findResult := collection.FindOne(context.TODO(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var result GroceryItem
	err = findResult.Decode(&result)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Found a single document: %+v\n", result)

	// Close the connection once no longer needed
	err = client.Disconnect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connection to MongoDB closed.")
}

func GetItems(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT * FROM items")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var items []Item
	for rows.Next() {
		item := Item{}
		err := rows.Scan(&item.ID, &item.Name, &item.Count)
		if err != nil {
			log.Fatal(err)
		}
		items = append(items, item)
	}

	json.NewEncoder(w).Encode(items)
}

func GetItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	stmt, err := db.Prepare("SELECT * FROM items where id=?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	var item Item
	err = stmt.QueryRow(params["id"]).Scan(&item.ID, &item.Name, &item.Count)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(item)
}

func CreateItem(w http.ResponseWriter, r *http.Request) {
	var item Item
	_ = json.NewDecoder(r.Body).Decode(&item)
	stmt, err := db.Prepare("INSERT INTO items(name, count) values(?,?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(item.Name, item.Count)
	if err != nil {
		log.Fatal(err)
	}
	json.NewEncoder(w).Encode(item)
}

func DeleteItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	stmt, err := db.Prepare("DELETE FROM items WHERE id = ?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(params["id"])
	if err != nil {
		log.Fatal(err)
	}
	fmt.Fprintf(w, "Item with ID = %s was deleted", params["id"])
}
