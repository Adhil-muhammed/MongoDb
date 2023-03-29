import express from "express";
import { Blog } from "../models/model.js";

const app = express;

export const router = app.Router();

export const getPost = async (req, res) => {
  try {
    const data = await Blog.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.send("hi");
};

export const getPostById = (req, res) => {
  res.send("hy lam wick jhone wick");
};

export const createPost = async (req, res) => {
  const post = new Blog({
    title: req.body.title,
    comments: [{ comment: req.body.comment }],
    author: req.body.author,
    body: req.body.body,
    meta: {
      favs: req.body.favs,
      votes: req.body.votes,
    },
  });

  try {
    const dataToSave = await post.save();

    res.status(201).json(dataToSave);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (req, res) => {
  res.send("hy lam wick jhone wick");
};

export const deletePost = (req, res) => {
  res.send("hy lam wick jhone wick");
};
