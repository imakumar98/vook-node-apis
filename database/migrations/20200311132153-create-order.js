'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      remarks: {
        type: Sequelize.STRING
      },
      deliveryDate: {
        type: Sequelize.DATE
      },
      deliveryAddressId: {
        type: Sequelize.INTEGER
      },
      billingAddressId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      paymentMode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};