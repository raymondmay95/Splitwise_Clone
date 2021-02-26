"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      settledTabId: { type: DataTypes.INTEGER },
      openTabId: { type: DataTypes.INTEGER },
      userId: { type: DataTypes.INTEGER },
      comment: { type: DataTypes.STRING },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Open_tab, { foreignKey: "openTabId" });
    Comment.belongsTo(models.Settled_tab, { foreignKey: "settledTabId" });
  };

  Comment.findAllCommentsByUserId = async function (id) {
    const comment = await Comment.findAll({
      where: {
        userId: id,
      },
    });
    return comment;
  };

  return Comment;
};
