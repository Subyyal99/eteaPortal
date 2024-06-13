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
const DepartmentController = require("../controllers/department.controller");
/**
 * middleware imported to use in routes 
 */
const checkAuth = require("../middleware/verifyJwtToken");

/**
 * post type router call to register user with middle ware to check whether the email already exists or not and to verify token
 */
router.post(
    "/get-all",
    [checkAuth.verifyToken],
    DepartmentController.getAllDepartments
);
router.post(
    "/add-department",
    [checkAuth.verifyToken],
    DepartmentController.addDepartment
);
/**
 * Documentaion for an Router Object
 * router Object is exported to be used in other files
 * @router
 */
module.exports = router;