/**
 * constant database (db) variable to access models 
 */
const db = require("../models/index.js");
const Task = db.tasks
/**
 * Class to create a department service object
 */
class TaskService {
    constructor() {}
    /**
     * function to create department
     * @param data department data to update or insert
     * @returns data
     */
    static async create(data) {
        return await Task.create(data);
    }
    static async findOne(data) {
        return await Task.findOne(data);
    }
    static async findAll(data) {
        return await Task.findAll(data);
    }
    static async update(updateClause, whereClause) {
        return await Task.update(updateClause, whereClause);
    }
    static async delete(whereClause) {
        return await Task.destroy(whereClause);
    }
    static async count(whereClause) {
        return await Task.count(whereClause);
    }
}

module.exports = TaskService;