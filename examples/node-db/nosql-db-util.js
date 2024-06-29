import { MongoClient } from "mongodb";

export const DBURL = "mongodb://127.0.0.1:27017";

export async function dbconnect() {
  try {
    return await MongoClient.connect(DBURL);
  } catch (err) {
    throw "DB Error";
  }
}
