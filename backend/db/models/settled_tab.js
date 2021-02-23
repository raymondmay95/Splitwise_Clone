'use strict';
module.exports = (sequelize, DataTypes) => {
  const Settled_tab = sequelize.define('Settled_tab', {
    invoice_id: DataTypes.INTEGER
  }, {});
  Settled_tab.associate = function(models) {
    // associations can be defined here
  };
  return Settled_tab;
};