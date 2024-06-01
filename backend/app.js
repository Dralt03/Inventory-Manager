import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.on("Error", (err) => {
  console.log(err);
  throw err;
});

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

export { app };
