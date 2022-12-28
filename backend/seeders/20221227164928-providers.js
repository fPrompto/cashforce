'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('providers', [
      {
        id: 1,
        name: 'CEDENTE 002',
        tradingName: 'CEDENTE 002 LTDA',
        createdAt: new Date('2020-10-29 21:22:21'),
        updatedAt: new Date('2020-10-29 21:22:22'),
        cnpjId: 2,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('providers', null, {});
  },
};
