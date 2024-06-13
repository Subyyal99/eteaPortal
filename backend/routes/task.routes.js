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
const TaskController = require("../controllers/task.controller");
/**
 * middleware imported to use in routes 
 */
const checkAuth = require("../middleware/verifyJwtToken");
const upload = require("../helpers/fileUpload");

/**
 * post type router call to register user with middle ware to check whether the email already exists or not and to verify token
 */
router.post(
    "/create-task",
    [checkAuth.verifyToken],
    upload.fields([{
        name: "attachment",
    }, ]),
    TaskController.createTask
);
router.post(
    "/get-all",
    [checkAuth.verifyToken],
    TaskController.getAllTasks
);
router.post(
    "/get-task",
    [checkAuth.verifyToken],
    TaskController.getTask
);
/**
 * Documentaion for an Router Object
 * router Object is exported to be used in other files
 * @router
 */
module.exports = router;