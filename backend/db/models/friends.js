'use strict';
module.exports = (sequelize, DataTypes) => {
  const friends = sequelize.define('friends', {
    user_id: DataTypes.INTEGER,
    friend_id: DataTypes.INTEGER
  }, {});
  friends.associate = function(models) {
    // associations can be defined here
  };
  return friends;
};