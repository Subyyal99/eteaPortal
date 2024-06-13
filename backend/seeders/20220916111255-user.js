'use strict';
var bcrypt = require('bcryptjs');
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
    return queryInterface.bulkInsert('Users', [{
      id: uuidv1(),
      fullName: 'Mubashir Asaad',
      email: 'superadmin@gmail.com',
      designation: 'Super Admin',
      mobileNumber: "0351-5597895",
      type: 'superAdmin',
      createdAt: new Date(),
      updatedAt: new Date(),
      password: bcrypt.hashSync('asdasd', 8)
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