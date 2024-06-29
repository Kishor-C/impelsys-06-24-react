import { MongoClient } from "mongodb";

let DB_URL = "mongodb://127.0.0.1:27017";

// code to connect MongoClient.connect(URL).then().catch()
// code to store db.collection("collection-name").insertOne({})

MongoClient.connect(DB_URL)
  .then((client) => {
    // access the database-name
    let db = client.db("impelsysdb");
    // access the collection and store - db.collection("profile").insertOne(doc).then().catch()
    db.collection("profile")
      .insertOne({
        _id: 5,
        name: "Edward",
        password: "edward123",
        email: "edward@g",
        phone: 8877555533,
        dob: new Date(2000, 15, 20),
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
      .finally(() => client.close());
  })
  .catch((err) => console.log(err));
