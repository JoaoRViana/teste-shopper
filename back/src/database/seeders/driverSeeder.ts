'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoDrivers = [
      {
       name:'Homer Simpson',
       description:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
       vehicle:'Plymouth Valiant 1973 rosa e enferrujado',
       rating:2,
       comment:'motorista simpático, mas errou o caminho 3 vezes. O vehicle cheira a donuts.',
       value:2.50,
       km_mínimo:1
      },
      {
        name:'Dominc Toreto',
        description:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
        vehicle:'Plymouth Valiant 1973 rosa e enferrujado',
        rating:2,
        comment:'Motorista simpático, mas errou o caminho 3 vezes. O vehicle cheira a donuts.',
        value: 5.50,
        km_mínimo:5
      },{
        name:'James Bond',
        description:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
        vehicle:'Plymouth Valiant 1973 rosa e enferrujado',
        rating:2,
        comment:'2/Motorista simpático, mas errou o caminho 3 vezes. O vehicle cheira a donuts.',
        value:10,
        km_mínimo:10
      }
    ];

    await queryInterface.bulkInsert('drivers', demoDrivers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drivers', null, {});
  }
};