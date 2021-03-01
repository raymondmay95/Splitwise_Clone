"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Friends", [
      {
        userId: 1,
        friendId: 2,
      },
      {
        userId: 1,
        friendId: 3,
      },
      {
        userId: 1,
        friendId: 4,
      },
      {
        userId: 1,
        friendId: 5,
      },
      {
        userId: 1,
        friendId: 6,
      },
      {
        userId: 1,
        friendId: 7,
      },
      {
        userId: 1,
        friendId: 8,
      },
      {
        userId: 1,
        friendId: 9,
      },
      {
        userId: 1,
        friendId: 10,
      },
      {
        userId: 1,
        friendId: 11,
      },
      {
        userId: 1,
        friendId: 12,
      },
      {
        userId: 2,
        friendId: 1,
      },
      {
        userId: 2,
        friendId: 3,
      },
      {
        userId: 2,
        friendId: 4,
      },
      {
        userId: 2,
        friendId: 5,
      },
      {
        userId: 2,
        friendId: 6,
      },
      {
        userId: 2,
        friendId: 7,
      },
      {
        userId: 2,
        friendId: 8,
      },
      {
        userId: 2,
        friendId: 9,
      },
      {
        userId: 2,
        friendId: 10,
      },
      {
        userId: 2,
        friendId: 11,
      },
      {
        userId: 2,
        friendId: 11,
      },
      {
        userId: 3,
        friendId: 1,
      },
      {
        userId: 3,
        friendId: 2,
      },
      {
        userId: 3,
        friendId: 4,
      },
      {
        userId: 3,
        friendId: 5,
      },
      {
        userId: 3,
        friendId: 6,
      },
      {
        userId: 3,
        friendId: 7,
      },
      {
        userId: 3,
        friendId: 8,
      },
      {
        userId: 4,
        friendId: 1,
      },
      {
        userId: 4,
        friendId: 2,
      },
      {
        userId: 4,
        friendId: 3,
      },
      {
        userId: 4,
        friendId: 5,
      },
      {
        userId: 4,
        friendId: 6,
      },
      {
        userId: 4,
        friendId: 7,
      },
      {
        userId: 4,
        friendId: 8,
      },
      {
        userId: 5,
        friendId: 1,
      },
      {
        userId: 5,
        friendId: 2,
      },
      {
        userId: 5,
        friendId: 3,
      },
      {
        userId: 5,
        friendId: 4,
      },
      {
        userId: 5,
        friendId: 6,
      },
      {
        userId: 5,
        friendId: 7,
      },
      {
        userId: 5,
        friendId: 8,
      },
      {
        userId: 11,
        friendId: 2,
      },
      {
        userId: 11,
        friendId: 3,
      },
      {
        userId: 11,
        friendId: 4,
      },
      {
        userId: 11,
        friendId: 5,
      },
      {
        userId: 11,
        friendId: 6,
      },
      {
        userId: 11,
        friendId: 7,
      },
      {
        userId: 11,
        friendId: 8,
      },
      {
        userId: 11,
        friendId: 9,
      },
      {
        userId: 11,
        friendId: 10,
      },
      {
        userId: 11,
        friendId: 1,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Friends", null, {});
  },
};
