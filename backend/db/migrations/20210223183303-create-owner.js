"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Owners", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      friendsTableId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Friends" },
      },
      portions: {
        allowNull: false,
        type: Sequelize.JSON,
      },
      initiated_by: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Owners");
  },
};
