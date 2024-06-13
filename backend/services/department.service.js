/**
 * constant database (db) variable to access models 
 */
const db = require("../models/index.js");
const Department = db.departments
/**
 * Class to create a department service object
 */
class DepartmentService {
    constructor() {}
    /**
     * function to create department
     * @param data department data to update or insert
     * @returns data
     */
    static async create(data) {
        return await Department.create(data);
    }
    static async findOne(data) {
        return await Department.findOne(data);
    }
    static async findAll(data) {
        return await Department.findAll(data);
    }
    static async update(updateClause, whereClause) {
        return await Department.update(updateClause, whereClause);
    }
    static async delete(whereClause) {
        return await Department.destroy(whereClause);
    }
}

module.exports = DepartmentService;