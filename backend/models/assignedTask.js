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
 * @returns Assigned Task model
 */
module.exports = (sequelize, DataTypes) => {
    /**
     * Class to create a User object
     */
    class AssignedTask extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            AssignedTask.belongsTo(models.User, {
                foreignKey: "userId",
            });
            AssignedTask.belongsTo(models.tasks, {
                foreignKey: "taskId",
            });
        }
    }
    /**
     * User model data
     */
    AssignedTask.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
            },
        },
        /**
         * name of the model
         */
        {
            sequelize,
            modelName: "assignedTasks",
        });
    return AssignedTask;
};