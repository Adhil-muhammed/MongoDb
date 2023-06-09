import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  router,
  getUser,
  createUser,
  deletePost,
  updateUser,
  getPostById,
  createRole,
} from "./routes/router.js";
import { checkDuplicateUsernameOrEmail } from "./middlewares/verifySignUp.js";
import { signUp } from "./auth/auth.js";

const app = express();
const db = mongoose.connection;

dotenv.config();
app.use(express.json());
app.use("/api", router);
// app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.URI);

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", () => {
  console.log("db Connected successfully");
});

router.get("/", (req, res) => {
  res.send("welcome back");
});

router.get("/getAll", (req, res) => getUser(req, res));

router.post("/create", (req, res) => createUser(req, res));

router.put("/updateUser/:id", (req, res) => updateUser(req, res));

router.delete("/post/:id", (req, res) => deletePost(req, res));

router.get("/getById/:id", (req, res) => getPostById(req, res));

router.get("/createRole", (req, res) => createRole(req, res));

// USER AUTHENTICATION
router.post("/register", checkDuplicateUsernameOrEmail, (req, res) =>
  signUp(req, res)
);

app.listen(8080, () => {
  console.log("sever connected successfully");
});
