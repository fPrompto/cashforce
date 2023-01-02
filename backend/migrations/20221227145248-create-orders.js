'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderNfId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      orderPath: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      orderFileName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      orderOriginalName: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      emissionDate: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      pdfFile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      emitedTo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      nNf: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      CTE: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      value: {
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
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
        references: {
          key: 'id',
          model: 'users',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
        references: {
          key: 'id',
          model: 'buyers',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      providerId: {
        allowNull: true,
        type: Sequelize.INTEGER(11),
        references: {
          key: 'id',
          model: 'providers',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cargoPackingList: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      deliveryCtrc: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    }, {
      initialAutoIncrement: 540,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};
