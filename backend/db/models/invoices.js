"use strict";
module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
    {
      details: DataTypes.STRING,
      photo: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
    },
    {}
  );
  Invoice.associate = function (models) {
    Invoice.hasMany(models.Settled_tab, { foreignKey: "invoiceId" });
    Invoice.hasMany(models.Open_tab, { foreignKey: "invoiceId" });
  };
  return Invoice;
};
