'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user_id: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {
    // associations can be defined here
  };
  return Friend;
};