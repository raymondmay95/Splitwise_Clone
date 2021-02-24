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
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Open_tab, { foreignKey: "openTabId" });
    Comment.belongsTo(models.Settled_tab, { foreignKey: "settledTabId" });
  };

  return Comment;
};
