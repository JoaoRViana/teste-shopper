'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ride_histories', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        customer_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        driver_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        origin: {
            type: Sequelize.STRING,
        },
        destination: {
            type: Sequelize.STRING,
        },
        distance: {
            type: Sequelize.INTEGER,
        },
        duration: {
            type: Sequelize.STRING,
        },
        value: {
            type: Sequelize.INTEGER,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updated_at: { 
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('ride_histories');
  },
};
