/**
 * constant database (db) variable to access models 
 */
const db = require("../models/index.js");
const AssignedTask = db.assignedTasks
/**
 * Class to create a department service object
 */
class AssignedTaskService {
    constructor() {}
    /**
     * function to create AssignedTask
     * @param data AssignedTask data to update or insert
     * @returns data
     */
    static async create(data) {
        return await AssignedTask.create(data);
    }
    static async findOne(data) {
        return await AssignedTask.findOne(data);
    }
    static async findAll(data) {
        return await AssignedTask.findAll(data);
    }
    static async update(updateClause, whereClause) {
        return await AssignedTask.update(updateClause, whereClause);
    }
    static async delete(whereClause) {
        return await AssignedTask.destroy(whereClause);
    }
}

module.exports = AssignedTaskService;