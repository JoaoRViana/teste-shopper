'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoCustomers = [
      {
       name:'Jao',
       password:'123',
      },
      {
        name:'ricardo',
        password:'123',
       },
    ];

    await queryInterface.bulkInsert('customers', demoCustomers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('customers', null, {});
  }
};