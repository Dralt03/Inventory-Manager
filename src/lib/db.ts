import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

export const connect = async () => {
  mongoose.connect(MONGO_URI, {
    dbName: "users",
    bufferCommands: false,
    connectTimeoutMS: 30000,
  });
};
