"use strict";
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owner",
    {
      friendsTableId: DataTypes.INTEGER,
      initiatedBy: DataTypes.INTEGER,
    },
    {}
  );
  Owner.associate = function (models) {
    Owner.hasMany(models.Invoice, { foreignKey: "groupId" });
    Owner.belongsTo(models.Friend, { foreignKey: "friendsTableId" });
    Owner.belongsTo(models.User, { foreignKey: "initiatedBy" });
  };

  Owner.allActivity = async function (id) {
    const { Op } = require("sequelize");
    const activity = await Owner.findAll({
      where: {
        [Op.or]: {
          initiatedBy: id,
          friendsTableId: { [Op.in]: [id] },
        },
      },
    });
    return activity;
  };
  return Owner;
};
