"use strict";
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define(
    "Friend",
    {
      userId: DataTypes.INTEGER,
      friendId: DataTypes.INTEGER,
    },
    {}
  );
  Friend.associate = function (models) {
    Friend.belongsTo(models.User, { foreignKey: "userId" });
    Friend.hasMany(models.Owner, { foreignKey: "friendsTableId" });
  };
  Friend.allFriends = async function (id) {
    const friends = await Friend.findAll({
      where: {
        userId: id,
      },
    });
    return friends;
  };

  return Friend;
};
