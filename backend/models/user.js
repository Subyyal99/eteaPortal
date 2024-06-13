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
 * @returns User model
 */
module.exports = (sequelize, DataTypes) => {
  /**
   * Class to create a User object
   */
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.departments, {
        foreignKey: "departmentId",
      });
      User.hasMany(models.assignedTasks, {
        foreignKey: "userId",
      });
      User.hasMany(models.tasks, {
        foreignKey: "userId",
        as: "assignedBy"
      });
    }
  }
  /**
   * User model data
   */
  User.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      /**
       * fullname of the user
       */
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /**
       * email of the user
       */
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "email",
      },
      /**
       * designation of the user
       */
      designation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      /**
       * mobileNumber of the user
       */
      mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["superAdmin", "admin", "employee"],
        defaultValue: "employee"
      },
      /**
       * login password of the user
       */
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    },
    /**
     * name of the model
     */
    {
      sequelize,
      modelName: "User",
    });
  return User;
};