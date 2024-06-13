/**
 * Search_Controller_Functions module
 * @module Search_Controller_Functions
 */
const {
    Op
} = require("sequelize");
const searchController = {};
/**
 * department service file import
 */
const SearchService = require("../services/search.service.js");
searchController.dynamicSearch = async (req, res) => {
    try {
        let whereClause = {}
        if (req.body.modelName == "departments") {
            whereClause.where = {
                name: {
                    [Op.substring]: req.body.searchFor,
                }
            }
        }
        if (req.body.modelName == "employees") {
            req.body.modelName = "User"
            whereClause.where = {
                fullName: {
                    [Op.substring]: req.body.searchFor,
                }
            }
        }
        const searcResults = await SearchService.findAll(req.body.modelName, whereClause);
        res.status(200).send({
            code: 200,
            message: "Search Completed Successfully",
            data: searcResults,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
};
module.exports = searchController;