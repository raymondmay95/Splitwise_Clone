'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    details: DataTypes.STRING,
    photo: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {});
  Invoices.associate = function(models) {
    // associations can be defined here
  };
  return Invoices;
};