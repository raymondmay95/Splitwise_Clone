"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Op } = require("sequelize");
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
    Invoice.belongsTo(models.Owner, { foreignKey: "groupId" });
  };

  Invoice.getInvoiceByGroupId = async function (groupIds) {
    const invoices = await Invoice.findAll({
      where: {
        groupId: {
          [Op.in]: [...groupIds],
        },
      },
      order: ["createdAt"],
    });
    return invoices;
  };

  Invoice.getInvoice = async function (id) {
    const invoice = await Invoice.findByPk(id);
    return invoice;
  };

  return Invoice;
};
