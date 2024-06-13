/**
 * Department_Controller_Functions module
 * @module Department_Controller_Functions
 */
/**
 * All functions
 for department data are in this file
 */
const db = require("../models/index.js");

/**
 * department controller object exports functions in the controller file
 */
const departmentController = {};
/**
 * department service file import
 */
const DepartmentService = require("../services/department.service.js");
departmentController.getAllDepartments = async (req, res) => {
    try {
        let whereClause = {};
        if (req.body.limit !== undefined && req.body.offset !== undefined) {
            whereClause = {
                limit: req.body.limit,
                offset: req.body.offset
            }
        }
        if (req.body.employeeInclude && req.body.employeeInclude == true) {
            whereClause.include = [{
                model: db.User,
                required: false
            }]
        }
        const departments = await DepartmentService.findAll(whereClause);
        res.status(200).send({
            code: 200,
            message: "Departments Retrieved Successfully",
            data: departments,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
};
departmentController.addDepartment = async (req, res) => {
    try {

        const department = await DepartmentService.create(req.body);
        res.status(200).send({
            code: 200,
            message: "Department Created Successfully",
            data: department,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};
module.exports = departmentController;