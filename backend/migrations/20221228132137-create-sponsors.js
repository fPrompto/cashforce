'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tradingName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cashforceTax: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      responsibleName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      responsibleEmail: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      responsiblePosition: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      responsiblePhone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      responsibleMobile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      website: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      postalCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      neighborhood: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      state: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      bank: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      bankAgency: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      account: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      situation: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      situationDate: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cnpjId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
        references: {
          key: 'id',
          model: 'cnpjs',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    }, {
      initialAutoIncrement: 17,
      charset: 'latin1',
      engine: 'InnoDB',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sponsors');
  }
};