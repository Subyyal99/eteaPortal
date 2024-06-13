"use strict";
/**
 * include model from sequelize
 */
const {
    Model
} = require('sequelize');
/**
 * exporting model to create
 * @param sequelize sequelize library 
 * @param DataTypes data type of the fields in table
 * @returns Task model
 */
module.exports = (sequelize, DataTypes) => {
    /**
     * Class to create a User object
     */
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Task.belongsTo(models.departments, {
                foreignKey: "departmentId",
            });
            Task.belongsTo(models.User, {
                foreignKey: "userId",
                as: "assignedBy"
            });
            Task.hasMany(models.assignedTasks, {
                foreignKey: "taskId",
            });
            Task.hasMany(models.uploadedFiles, {
                foreignKey: "taskId",
            });
        }
    }
    /**
     * User model data
     */
    Task.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
            },
            /**
             * name of the Task
             */
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            priority: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            startDate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dueDate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["Assigned", "To-Do", "In Progress", "Completed"],
                defaultValue: "Assigned"
            },
        },
        /**
         * name of the model
         */
        {
            sequelize,
            modelName: "tasks",
        });
    return Task;
};