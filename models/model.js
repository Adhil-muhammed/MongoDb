import mongoose from "mongoose";

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

export const Blog = mongoose.model("Blog", blogSchema);
