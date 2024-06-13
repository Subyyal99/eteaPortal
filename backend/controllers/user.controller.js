/**
 * User_Controller_Functions module
 * @module User_Controller_Functions
 */
/**
 * All functions for user data are in this file
 */

/**
 * user controller object exports functions in the controller file
 */
const userController = {};
/**
 * user service file import
 */
const UserService = require("../services/user.service.js");
/**
 * user service class object to access user services
 */
const userServiceObj = new UserService();
/**
 *including bcrypt library to encrypt password
 */
const bcrypt = require("bcryptjs");
const {
  v1: uuidv1
} = require("uuid");
/**
 * function to register user 
 * @param req - contains all data required for request
 * @param res - response returned by the funtion
 * @returns user
 */
userController.registerUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    req.body.id = uuidv1();
    const user = await userServiceObj.create(req.body);
    res.status(200).send({
      code: 200,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
/**
 * function to login users by email
 * @param req - contains all data required for request
 * @param res - response returned by the funtion
 * @returns token id and user is logged in 
 */
userController.loginUser = async (req, res) => {
  try {
    const user = await userServiceObj.loginUser(req.body);
    const userType = await userServiceObj.getuser({
      where: {
        email: req.body.email
      }
    });
    res.status(200).send({
      code: 200,
      message: "User Logged In Successfully",
      data: user,
      userRole: userType.role,
    });
  } catch (error) {
    console.log(error.toString());
    return res.status(500).send(error.toString());
  }
};
/**
 * function to change user password
 * @param req - contains all data required for request
 * @param res - response returned by the funtion
 * @returns changed user password
 */
userController.changePassword = async (req, res) => {
  try {
    req.body.id = req.userId;
    const user = await userServiceObj.changePassword(req.body);
    res.status(200).send({
      code: 200,
      message: "Password Changed Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).send(error.toString());
  }
};
/**
 * function to check user email
 * @param req - contains all data required for request
 * @param res - response returned by the funtion
 * @returns boolean value according to email existance
 */
userController.checkEmail = async (req, res) => {
  try {
    const user = await userServiceObj.getUser({
      where: {
        email: req.body.email
      },
      attributes: ["id", "email"],
    });
    res.status(200).send({
      code: 200,
      message: "user check email",
      user: user ? true : false,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
/**
 * function to get verified user
 * @param req - contains all data required for request
 * @param res - response returned by the funtion
 * @returns verified user
 */
userController.getVerified = async (req, res) => {
  try {
    var user = await userServiceObj.getUser({
      // attributes: ["verified"],
      where: {
        id: req.userId
      },
    });

    res.status(200).send({
      code: 200,
      message: "User Verification",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
userController.getAllUsers = async (req, res) => {
  try {
    let whereClause = {}
    if (req.body.type == "employee" && req.body.limit !== undefined && req.body.offset !== undefined) {
      whereClause = {
        limit: req.body.limit,
        offset: req.body.offset
      }
      whereClause.where = {
        type: req.body.type
      }
    }
    const users = await userServiceObj.findAll(whereClause)
    // capitalizes the first letter of type variable
    const capitalizedType = req.body.type.charAt(0).toUpperCase() + req.body.type.slice(1);
    res.status(200).send({
      code: 200,
      message: `${capitalizedType} retrieved Successfully`,
      data: users,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
userController.assignUser = async (req, res) => {
  try {
    let updateData = {
      departmentId: req.body.department.id
    }
    for (let data of req.body.employees) {
      const users = await userServiceObj.update(updateData, {
        where: {
          id: data.id,
          fullName: data.name
        }
      })
    }
    res.status(200).send({
      code: 200,
      message: `Employees Assigned Successfully`,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};
/**
 * Documentaion for an Controller Object
 * User Controller Object is exported to be used in other files
 * @userController
 */

module.exports = userController;