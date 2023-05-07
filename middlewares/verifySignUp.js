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
          res.status(400).json({
            success: false,
            message: "user name is alredy exist",
          });
        }
      })
      .catch(() => {
        res.status(500).json({
          success: false,
          message: "internal server error",
        });
      });
    // EMAIL;
    // Users.findOne({ email: req.body.email })
    //   .then((isEmail) => {
    //     if (isEmail) {
    //       console.log("isEmail: ", isEmail);
    //       req.UserEmailExist = false;
    //       res.status(400).json({
    //         success: false,
    //         message: "email is alredy exist",
    //       });
    //     }
    //   })
    //   .catch(() => {
    //     res.status(500).json({
    //       success: false,
    //       message: "internal server error",
    //     });
    //   });

    if (req.UserExist) {
      next();
    }
  } catch (error) {
    res?.status(500).json({
      success: false,
      message: "function not excuted",
    });
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
