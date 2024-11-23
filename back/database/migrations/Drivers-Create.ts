'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descrição: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      carro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      avaliação: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      taxa: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      km_mínimo: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('drivers');
  },
};
