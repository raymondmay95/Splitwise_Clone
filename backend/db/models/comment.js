'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    settled_tab_id: DataTypes.INTEGER,
    open_tab_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};