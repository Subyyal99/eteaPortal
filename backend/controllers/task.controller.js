/**
 * Task_Controller_Functions module
 * @module Task_Controller_Functions
 */
const {
    Op
} = require("sequelize");
const taskController = {};
const db = require("../models/index.js");
const fs = require('fs');
const {
    v1: uuidv1
} = require("uuid");
const path = require('path');
require('dotenv').config();

/**
 * department service file import
 */
const TaskService = require("../services/task.service.js");
const AssignedTaskService = require("../services/assignedTask.service.js");
const UploadedFilesService = require("../services/uploadedFiles.service.js");
const HelperService = require("../services/helper.service.js");
taskController.createTask = async (req, res) => {
    try {
        let data = {
            title: req.body.title,
            priority: req.body.priority,
            startDate: req.body.startDate,
            dueDate: req.body.dueDate,
            description: req.body.description,
            departmentId: req.body.departmentId,
            userId: req.userId
        }
        const task = await TaskService.create(data);
        if (req.files.attachment && req.files.attachment.length > 0) {
            req.body.uploadedFiles = []
            for (let value of req.files.attachment) {
                const extension = value.originalname.split(".").pop().toLowerCase();
                let name = value.filename;
                const type = value.mimetype.includes("image") ? "image" : "file";
                if (value.mimetype.includes("jpeg") || value.mimetype.includes("jpg") || value.mimetype.includes("png")) {
                    fs.readFile(`${value.destination}${name}`, function (err, data) {
                        if (err) {
                            console.log(err)
                            return res.status(500).send(err);
                        }
                    });
                    const data = await HelperService.compressFunc(value.destination, name);
                    name = "comp" + name
                }
                req.body.uploadedFiles.push({
                    id: uuidv1(),
                    fileName: value.originalname,
                    extension: extension,
                    url: process.env.URL + value.destination.replace('uploads/', '') + name,
                    taskId: task.id,
                    type: type
                })

            }
            const uploads = await UploadedFilesService.bulkCreate(req.body.uploadedFiles)
        }
        let assignedTo = []
        assignedTo = JSON.parse(req.body.assignedTo)
        for (let data of assignedTo) {
            let assignedTaskInfo = {
                taskId: task.id,
                userId: data.id
            }
            await AssignedTaskService.create(assignedTaskInfo);
        }
        res.status(200).send({
            code: 200,
            message: "Task created Successfully",
            data: task
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
};
taskController.getAllTasks = async (req, res) => {
    try {
        let whereClause = {}
        if (req.body.limit !== undefined && req.body.offset !== undefined) {
            whereClause = {
                where: {
                    userId: req.userId
                },
                limit: req.body.limit,
                offset: req.body.offset
            }
        }
        if (req.body.includeAssignee && req.body.includeAssignee == true) {
            whereClause.include = [{
                model: db.User,
                required: true,
                as: "assignedBy",
                attributes: ["id", "fullName"]
            }]
        }
        const tasks = await TaskService.findAll(whereClause);
        let countClause = {}
        countClause.where = {
            userId: req.userId
        }
        const taskCount = await TaskService.count(countClause);

        res.status(200).send({
            code: 200,
            message: "Task retrieved Successfully",
            data: tasks,
            totalRecords: taskCount
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
};
taskController.getTask = async (req, res) => {
    try {
        let whereClause = {}
        if (req.body.taskId && req.body.taskId !== "") {
            whereClause = {
                where: {
                    id: req.body.taskId,
                    userId: req.userId
                },
            }
        }
        if (req.body.limit !== undefined && req.body.offset !== undefined) {
            whereClause = {
                where: {
                    userId: req.userId
                },
                limit: req.body.limit,
                offset: req.body.offset
            }
        }
        whereClause.include = []
        if (req.body.includeAssignee && req.body.includeAssignee == true) {
            whereClause.include = [{
                model: db.User,
                required: true,
                as: "assignedBy",
                attributes: ["id", "fullName"]
            }]
        }
        if (req.body.includeAssignedTo && req.body.includeAssignedTo == true) {
            whereClause.include = whereClause.include.concat([{
                model: db.assignedTasks,
                required: true,
                include: [{
                    model: db.User,
                    required: true,
                    attributes: ["id", "fullName"]
                }]
            }])
        }
        if (req.body.includeUploadedFiles && req.body.includeUploadedFiles == true) {
            whereClause.include = whereClause.include.concat([{
                model: db.uploadedFiles,
                required: true,

            }])
        }
        const tasks = await TaskService.findOne(whereClause);

        res.status(200).send({
            code: 200,
            message: "Task retrieved Successfully",
            data: tasks,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
};
module.exports = taskController;