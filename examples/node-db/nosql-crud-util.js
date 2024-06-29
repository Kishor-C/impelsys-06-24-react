/*
create reusable functions to perform following tasks
1. findAll(): returns a promise that can find all the documents
2. authenticate(email, password): returns a promise that can find the documents using 
    email & password

3. Test each function in a separate js file
*/

import { dbconnect } from "./nosql-db-util.js";
// storing the document
export async function store(document) {
  let client = undefined;
  try {
    client = await dbconnect();
    let db = client.db("impelsysdb");
    return await db.collection("profile").insertOne(document);
  } catch (err) {
    throw err;
  } finally {
    if (client != undefined) {
      client.close();
    }
  }
}
export async function authenticate(mail, pwd) {
  let client = undefined;
  try {
    client = await dbconnect();
    let db = client.db("impelsysdb");
    return await db
      .collection("profile")
      .findOne({ email: mail, password: pwd });
  } catch (err) {
    throw err;
  } finally {
    if (client != undefined) {
      client.close();
    }
  }
}
export async function findAll() {
  let client = undefined;
  try {
    client = await dbconnect();
    let db = client.db("impelsysdb");
    return await db.collection("profile").find().toArray();
  } catch (err) {
    throw err;
  } finally {
    if (client != undefined) {
      client.close();
    }
  }
}
