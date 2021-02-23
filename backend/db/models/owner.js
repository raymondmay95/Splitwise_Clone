'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    friends_table_id: DataTypes.INTEGER,
    portions: DataTypes.JSON,
    initiated_by: DataTypes.INTEGER
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
  };
  return Owner;
};