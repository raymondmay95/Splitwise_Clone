"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Owners", [
      {
        friendsTableId: 1,
        initiatedBy: 1,
      },
      {
        friendsTableId: 2,
        initiatedBy: 1,
      },
      {
        friendsTableId: 3,
        initiatedBy: 1,
      },
      {
        friendsTableId: 4,
        initiatedBy: 1,
      },
      {
        friendsTableId: 5,
        initiatedBy: 1,
      },
      {
        friendsTableId: 6,
        initiatedBy: 1,
      },
      {
        friendsTableId: 7,
        initiatedBy: 1,
      },
      {
        friendsTableId: 8,
        initiatedBy: 1,
      },
      {
        friendsTableId: 9,
        initiatedBy: 1,
      },
      {
        friendsTableId: 10,
        initiatedBy: 1,
      },
      {
        friendsTableId: 11,
        initiatedBy: 1,
      },
      {
        friendsTableId: 12,
        initiatedBy: 1,
      },
      {
        friendsTableId: 1,
        initiatedBy: 12,
      },
      {
        friendsTableId: 2,
        initiatedBy: 12,
      },
      {
        friendsTableId: 3,
        initiatedBy: 12,
      },
      {
        friendsTableId: 4,
        initiatedBy: 12,
      },
      {
        friendsTableId: 5,
        initiatedBy: 12,
      },
      {
        friendsTableId: 6,
        initiatedBy: 12,
      },
      {
        friendsTableId: 7,
        initiatedBy: 12,
      },
      {
        friendsTableId: 8,
        initiatedBy: 12,
      },
      {
        friendsTableId: 9,
        initiatedBy: 12,
      },
      {
        friendsTableId: 10,
        initiatedBy: 12,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Owners", null, {});
  },
};
