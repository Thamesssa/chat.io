'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [{
       firstname: 'John',
       lastName: 'Doe',
       password: bcrypt.hashSync('password',10),
       email: 'john.doe@gmail.com',
       gender: 'male',
       avatar:'picture'

     },
     {
      firstname: 'Sam',
      lastName: 'Smith',
      password: 'password',
      email: 'sam.smith@gmail.com',
      gender: 'male',
      avatar:'picture'

    },
    {
        firstname: 'Jane',
        lastName: 'Doe',
        password: 'password',
        email: 'jane.doe@gmail.com',
        gender: 'female',
        avatar:'picture'
 
    }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
