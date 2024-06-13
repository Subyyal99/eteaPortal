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
const SearchController = require("../controllers/search.controller");
/**
 * middleware imported to use in routes 
 */
const checkAuth = require("../middleware/verifyJwtToken");

/**
 * post type router call to register user with middle ware to check whether the email already exists or not and to verify token
 */
router.post(
    "/dynamic-search",
    [checkAuth.verifyToken],
    SearchController.dynamicSearch
);
/**
 * Documentaion for an Router Object
 * router Object is exported to be used in other files
 * @router
 */
module.exports = router;