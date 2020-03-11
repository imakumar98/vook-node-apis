'use strict';
module.exports = (sequelize, DataTypes) => {
  const LineItem = sequelize.define('LineItem', {
    orderId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  LineItem.associate = function(models) {
    // associations can be defined here
  };
  return LineItem;
};