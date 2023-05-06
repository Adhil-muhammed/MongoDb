import express from "express";
import { Blog, TaskModel } from "../models/model.js";

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

export const createUser = async (req, res) => {
  try {
    const taskData = await req.body;
    await TaskModel.create(taskData)
      .then((createdTask) => {
        if (!createdTask)
          return res.status(404).json({
            success: false,
            message: "Task creation failed",
            error: "Unable get created task",
          });
        res.status(201).json({
          success: true,
          createdTask,
        });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updatePost = (req, res) => {
  res.send("hy lam wick jhone wick");
};

export const deletePost = (req, res) => {
  res.send("hy lam wick jhone wick");
};
