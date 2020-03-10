'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    deliveryDate: DataTypes.DATE,
    deliveryAddressId: DataTypes.INTEGER,
    billingAddressId: DataTypes.INTEGER,
    isBillingAddressSame: DataTypes.BOOLEAN,
    finalAmount: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};