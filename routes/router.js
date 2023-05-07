import express from "express";
import { Blog, TaskModel, UserRole, Users } from "../models/model.js";

const app = express;

export const router = app.Router();

// GET ALL USER
export const getUser = async (req, res) => {
  try {
    TaskModel.find()
      .then((allUsers) => {
        res.status(200).json({
          success: true,
          allUsers,
        });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          message: "Cant fined ",
          error,
        });
      });
  } catch (error) {}
};

//  GET USER BY ID
export const getPostById = async (req, res) => {
  try {
    await TaskModel.findById(req.params.id)
      .then((user) => {
        return res.status(200).json({
          success: true,
          user,
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

// CREATE USER
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

// UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const id = await req.params.id;
    const updateData = await req.body;

    await TaskModel.findByIdAndUpdate(id, updateData, { new: true })
      .then((updateUser, err) => {
        res.status(200).json({
          success: true,
          message: "Updation successfully compleated",
          updateUser,
        });
      })
      .catch((error) => {
        console.log("error: ", error);
        res.status(400).json({
          success: false,
          message: "ERROR",
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deletePost = (req, res) => {
  res.send("hy lam wick jhone wick");
};

// CREATE USER ROLES
export const createRole = (req, res) => {
  try {
    UserRole.estimatedDocumentCount()
      .then((count) => {
        if (count === 0) {
          new UserRole({
            name: "user",
          }).save();

          new UserRole({
            name: "moderator",
          }).save();

          new UserRole({
            name: "admin",
          }).save();

          res.status(200).json({
            success: true,
            message: " Successfully created the Roles",
          });
        } else {
          res.status(200).json({
            message: "Roles are already created ",
          });
        }
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          message: error.message,
        });
      });
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
