'use strict';
const {
  v1: uuidv1
} = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('departments', [{
      id: uuidv1(),
      name: 'department-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv1(),
      name: 'department-2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv1(),
      name: 'department-3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv1(),
      name: 'department-4',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};