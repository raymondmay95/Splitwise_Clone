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
    // associations can be defined here
  };
  return Owner;
};
