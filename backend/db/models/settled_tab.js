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
    Settled_tab.hasMany(models.Comment, { foreignKey: "openTabId" });
    Settled_tab.belongsTo(models.Invoice, { foreignKey: "invoiceId" });
  };

  Settled_tab.getTab = async function (id) {
    const tab = await Settled_tab.findByPk(id);
    return tab;
  };

  return Settled_tab;
};
