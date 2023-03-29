import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  router,
  getPost,
  createPost,
  deletePost,
  updatePost,
  getPostById,
} from "./routes/router.js";

const app = express();
const db = mongoose.connection;

dotenv.config();
app.use(express.json());
app.use("/api", router);
// app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URI);

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", () => {
  console.log("Connected successfully");
});

router.get("/getAll", (req, res) => getPost(req, res));

router.post("/post", (req, res) => createPost(req, res));

router.put("/update", (req, res) => updatePost(req, res));

router.delete("/post/:id", (req, res) => deletePost(req, res));

router.get("/getById/:id", (req, res) => getPostById(req, res));

app.listen(5000, () => {
  console.log("sever connected successfully");
});
