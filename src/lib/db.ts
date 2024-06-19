import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URI, {
      dbName: "users",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    });

  cached.conn = await cached.promise;
  console.log(cached.conn);
  return cached.conn;
};
