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

  Open_tab.getAll = async function (id) {
    const Open_tabs = await Open_tab.findAll({
      where: {
        invoiceId: id,
      },
    });
    return Open_tabs;
  };

  return Open_tab;
};
