import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(process.env.USER_ID, () => {
  console.log(`app listen port ${process.env.PORT} `);
});

mongoose.connect(process.env.URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
