import connectDB from "./db/dbconnect.js";
import express from "express";
import cors from "cors";

const PORT = 8080;
const app = express();

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
