import { Users } from "../models/model.js";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    req.UserExist = true;
    req.UserEmailExist = true;

    await Users.findOne({ username: req.body.username })
      .exec()
      .then((isUsername) => {
        if (isUsername) {
          req.UserExist = false;
        }
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "internal server error",
        });
      });
    // EMAIL;
    await Users.findOne({ email: req.body.email })
      .then((isEmail) => {
        if (isEmail) {
          req.UserEmailExist = false;
        }
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "internal server error",
        });
      });

    if (!req.UserExist) {
      return res.status(400).json({
        success: false,
        message: "user name is alredy exist",
      });
    }
    if (!req.UserEmailExist) {
      return res.status(400).json({
        success: false,
        message: "email is alredy exist",
      });
    }
    if (!req.UserExist && !req.UserEmailExist) {
      return res.status(400).json({
        success: false,
        message: "user name and email alredy exist",
      });
    }
    if (req.UserExist && req.UserEmailExist) {
      next();
    }
  } catch (error) {
    res?.status(500).json({});
  }
};

export const checkRolesExisted = (req, res, next) => {
  //   const dbRoles = ["user", "admin", "moderator"];
  //   if (req.body.roles) {
  //     for (let i = 0; i < req.body.roles.length; i++) {
  //       if (!dbRoles.includes(req.body.roles[i])) {
  //         res.status(400).send({
  //           message: `Failed! Role ${req.body.roles[i]} does not exist!`,
  //         });
  //         return;
  //       }
  //     }
  //   }
  //   next();
};
