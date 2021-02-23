"use strict";
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Friend.associate = function (models) {
    Friend.belongsTo(models.User, { foreignKey: "userId" });
    Friend.hasMany(models.Owners, { foreignKey: "friendsTableId" });
  };
  return Friend;
};
