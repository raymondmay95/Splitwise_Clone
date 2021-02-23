"use strict";
module.exports = (sequelize, DataTypes) => {
  const Open_tab = sequelize.define(
    "Open_tab",
    {
      invoiceId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {}
  );
  Open_tab.associate = function (models) {
    // associations can be defined here
  };
  return Open_tab;
};
