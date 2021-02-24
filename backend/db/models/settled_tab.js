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
    Settled_tab.hasMany(models.Comment, { foreignKey: "openTabs" });
    Settled_tab.belongsTo(models.Invoice, { foreignKey: "invoiceId" });
  };

  return Settled_tab;
};
