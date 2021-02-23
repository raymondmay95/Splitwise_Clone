"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      settledTabId: DataTypes.INTEGER,
      openTabId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {}
  );
  Comment.associate = function (models) {
    // associations can be defined here
  };
  return Comment;
};
