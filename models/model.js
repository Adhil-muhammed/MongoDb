import mongoose from "mongoose";

const { model, Schema } = mongoose;

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [
    {
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number,
  },
});

const MySchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true,
    maxlength: 50,
  },
  address: {
    type: String,
    maxlength: 50,
    uppercase: true,
    required: true,
  },
  userId: {
    type: Number,
    minlength: 10,
    maxlength: 20,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  vehicle_status: {
    type: Boolean,
  },
});

const Role = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = new Schema({
  username: String,
  email: String,
  // password: String,
  // roles: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Role",
  //   },
  // ],
});

export const TaskModel = model("userdetails", MySchema);
export const Blog = mongoose.model("Blog", blogSchema);
export const UserRole = model("Role", Role);
export const Users = model("User", User);
