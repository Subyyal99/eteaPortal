/**
 * constant database (db) variable to access models 
 */
const db = require("../models/index.js");
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
    static async findOne(dbName, data) {
        return await db[dbName].findOne(data);
    }
    static async findAll(dbName, data) {
        return await db[dbName].findAll(data);
    }

}

module.exports = DepartmentService;