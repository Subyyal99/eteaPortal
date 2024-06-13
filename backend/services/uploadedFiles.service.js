/**
 * constant database (db) variable to access models 
 */
const db = require("../models/index.js");
const UploadedFiles = db.uploadedFiles
/**
 * Class to create a department service object
 */
class UploadedFilesService {
    constructor() {}
    /**
     * function to create department
     * @param data department data to update or insert
     * @returns data
     */
    static async create(data) {
        return await UploadedFiles.create(data);
    }
    static async bulkCreate(data) {
        return await UploadedFiles.bulkCreate(data);
    }
    static async findOne(data) {
        return await UploadedFiles.findOne(data);
    }
    static async findAll(data) {
        return await UploadedFiles.findAll(data);
    }
    static async update(updateClause, whereClause) {
        return await UploadedFiles.update(updateClause, whereClause);
    }
    static async delete(whereClause) {
        return await UploadedFiles.destroy(whereClause);
    }
}

module.exports = UploadedFilesService;