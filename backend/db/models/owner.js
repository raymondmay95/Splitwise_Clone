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
    Owner.hasMany(models.Invoice, { foreignKey: "userId" });
    Owner.hasMany(models.Friend, { foreignKey: "friendsTableId" });
    Owner.belongsTo(models.User, { foreignKey: "initiatedBy" });
  };
  return Owner;
};
