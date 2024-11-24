'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const demoDrivers = [
      {
       nome:'Homer Simpson',
       descrição:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
       carro:'Plymouth Valiant 1973 rosa e enferrujado',
       avaliação:'2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
       taxa:'R$2,50/km',
       km_mínimo:1
      },
      {
        nome:'Dominc Toreto',
        descrição:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
        carro:'Plymouth Valiant 1973 rosa e enferrujado',
        avaliação:'2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
        taxa:'R$5,50/km',
        km_mínimo:5
      },{
        nome:'James Bond',
        descrição:'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
        carro:'Plymouth Valiant 1973 rosa e enferrujado',
        avaliação:'2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
        taxa:'R$10,00/km',
        km_mínimo:10
      }
    ];

    await queryInterface.bulkInsert('drivers', demoDrivers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('drivers', null, {});
  }
};