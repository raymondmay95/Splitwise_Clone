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
    Open_tab.hasMany(models.Comment, { foreignKey: "openTabId" });
    Open_tab.belongsTo(models.Invoice, { foreignKey: "invoiceId" });
  };

  Open_tab.findTab = async function (id) {
    const tab = await Open_tab.findByPk(id);
    return tab;
  };

  return Open_tab;
};
