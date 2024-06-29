import express from "express";
import cors from "cors";
import { authenticate, store } from "./nosql-crud-util.js";
import { Buffer } from "buffer";
// other imports like store(), findAll(), findById(), authenticate() comes here

// express object to call http methods like get, post, put, delete
let app = express();
// adding cors to the express & also parser for json
app.use(cors());
app.use(express.json()); // parser for json to convert to js when request body carries json

// login based on email and password
app.get("/profile/login", async (req, res) => {
  let authHeaders = req.headers.authorization;
  let encodedSplitData = authHeaders.split(" ");
  let decodedData = atob(encodedSplitData[1]); // decode
  let decodedSplitData = decodedData.split(":");
  let mail = decodedSplitData[0];
  let pwd = decodedSplitData[1];
  try {
    let result = await authenticate(mail, pwd);
    if (result != null) res.status(200).json(result);
    else res.status(404).json({ message: "Email or Password is incorrect" });
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
});

// storing the document - import store from 'nosql-crud-util.js'
app.post("/profile", async (req, res) => {
  // reading the request body
  let doc = req.body;
  try {
    let result = await store(doc);
    res.status(201).json(result);
  } catch (err) {
    res.status(409).json(err);
  }
});

app.get("/greet/:user", (req, res) => {
  let username = req.params.user; // reads path parameter :user
  // res.json() is used to send the json as the response
  res.status(200).json({ message: `Hi ${username}` });
});
// start the server using app.listen(port, callback)
app.listen(8080, () => console.log("Server running in 8080"));
