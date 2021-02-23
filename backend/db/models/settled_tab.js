"use strict";
module.exports = (sequelize, DataTypes) => {
  const Settled_tab = sequelize.define(
    "Settled_tab",
    {
      invoiceId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {}
  );
  Settled_tab.associate = function (models) {
    // associations can be defined here
  };
  return Settled_tab;
};
