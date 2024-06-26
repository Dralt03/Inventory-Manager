const MONGO_URI = process.env.MONGO_URI!;

export const AddToDB = async (user: any) => {
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const database = client.db("users");
    const collections = database.collections("users");
    await collections.insertOne(user);
    console.log("User added");
  } catch (err) {
    console.error("Error creating User: ", err);
    return null;
  } finally {
    await client.close();
  }
};
