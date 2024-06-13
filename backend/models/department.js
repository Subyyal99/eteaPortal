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
 * @returns Department model
 */
module.exports = (sequelize, DataTypes) => {
    /**
     * Class to create a User object
     */
    class Department extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            Department.hasMany(models.User, {
                foreignKey: "departmentId",
            });
            Department.hasMany(models.tasks, {
                foreignKey: "departmentId",
            });
        }
    }
    /**
     * User model data
     */
    Department.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
            },
            /**
             * name of the department
             */
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: "name",
            },
        },
        /**
         * name of the model
         */
        {
            sequelize,
            modelName: "departments",
        });
    return Department;
};