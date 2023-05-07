import { Users } from "../models/model.js";

export const signUp = async (req, res) => {
  try {
    await Users.create(req.body)
      .then((signedUser) => {
        res.status(200).json({
          success: true,
          signedUser,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
