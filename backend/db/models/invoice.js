'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define('Invoice', {
    details: DataTypes.STRING
  }, {});
  Invoice.associate = function(models) {
    // associations can be defined here
  };
  return Invoice;
};