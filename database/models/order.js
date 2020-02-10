'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    lineItemId: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    status: DataTypes.STRING,
    finalAmount: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};