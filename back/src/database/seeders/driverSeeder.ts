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
        description:'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
        vehicle:'Dodge Charger R/T 1970 modificado',
        rating:4,
        comment:'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
        value: 5.50,
        km_mínimo:5
      },{
        name:'James Bond',
        description:'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
        vehicle:'Aston Martin DB5 clássico',
        rating:5,
        comment:'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
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