import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 5001;

app.listen(port, () => {
  console.log(`app listen port ${port} `);
});

mongoose.connect(
  `mongodb+srv://adhilmuhammed:0077@cluster0.wlmf4ls.mongodb.net/test`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
