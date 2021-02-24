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
    Friend.hasMany(models.User, { foreignKey: "userId" });
    Friend.hasMany(models.Owner, { foreignKey: "friendsTableId" });
  };
  return Friend;
};
