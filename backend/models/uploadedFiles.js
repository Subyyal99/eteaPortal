"use strict";
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    /**
     * Class to create a User object
     */
    class UploadedFiles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            UploadedFiles.belongsTo(models.tasks, {
                foreignKey: "taskId",
            });
        }
    }
    /**
     * User model data
     */
    UploadedFiles.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV1,
                primaryKey: true,
            },
            fileName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            extension: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["image", "file"]
            },

        },
        /**
         * name of the model
         */
        {
            sequelize,
            modelName: "uploadedFiles",
        });
    return UploadedFiles;
};