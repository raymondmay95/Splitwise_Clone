"use strict";
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owner",
    {
      friendsTableId: DataTypes.INTEGER,
      portions: DataTypes.JSON,
      initiatedBy: DataTypes.INTEGER,
    },
    {}
  );
  Owner.associate = function (models) {
    Owner.hasMany(models.Invoice, { foreignKey: "groupId" });
    Owner.hasMany(models.Friend, { foreignKey: "friendsTableId" });
    Owner.hasOne(models.User, { foreignKey: "initiatedBy" });
  };
  return Owner;
};
