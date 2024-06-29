import { dbconnect } from "./nosql-db-util.js";

export async function findById(id) {
  let client = undefined;
  try {
    client = await dbconnect();
    let db = client.db("impelsysdb");
    return await db.collection("profile").findOne({ _id: id });
  } catch (err) {
    throw err;
  } finally {
    if (client != undefined) {
      client.close();
    }
  }
}
// this is only for testing purpose we need to comment after testing
// findById(2)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// dbconnect()
//   .then((client) => {
//     let db = client.db("impelsysdb");
//     db.collection("profile")
//       .findOne({ _id: 4 })
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error))
//       .finally(() => client.close());
//   })
//   .catch((err) => console.log(err));
