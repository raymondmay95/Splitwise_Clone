'use strict';
module.exports = (sequelize, DataTypes) => {
  const Open_tab = sequelize.define('Open_tab', {
    invoice_id: DataTypes.INTEGER
  }, {});
  Open_tab.associate = function(models) {
    // associations can be defined here
  };
  return Open_tab;
};