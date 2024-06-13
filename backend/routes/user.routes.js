/**
 * User_Routes module
 * @module SMS_Routes
 */
/**
 * the routings for User functions are written in this file
 */
/**
 * functions refernece return
 */
const express = require("express");
/**
 * functions refernece call for router
 */
const router = express.Router();
/**
 * including user Controller object to access controller functions
 */
const UserController = require("../controllers/user.controller");
/**
 * including upload helper to upload user images 
 */
const upload = require("../helpers/fileUpload");
/**
 * middleware imported to use in routes 
 */
const checkAuth = require("../middleware/verifyJwtToken");
/**
 * middleware imported to use in routes 
 */
/**
 * middleware imported to use in routes 
 */
const checkDuplicateEmail = require("../middleware/verifySignUp");
/**
 * post type router call to login user with middle ware to check ip of login
 */
router.post("/login", UserController.loginUser);
/**
 * post type router call to register user with middle ware to check whether the email already exists or not and to verify token
 */
router.post(
  "/register",
  [checkDuplicateEmail.checkDuplicateEmail], [checkAuth.verifyToken],
  UserController.registerUser
);
/**
 * post type router call to check user email
 */
router.post("/check-email", UserController.checkEmail);
router.post("/get-all-users", UserController.getAllUsers);
router.post("/assign-employee", UserController.assignUser);
/**
 * Documentaion for an Router Object
 * router Object is exported to be used in other files
 * @router
 */
module.exports = router;