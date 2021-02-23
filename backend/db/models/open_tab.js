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
    Open_tab.hasMany(models.Comment, { foreignKey: "openTabs" });
    Open_tab.belongsTo(models.Invoice, { foreignKey: "invoiceId" });
  };
  return Open_tab;
};
