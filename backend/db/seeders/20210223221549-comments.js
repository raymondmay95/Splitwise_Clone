"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          openTabId: 1,
          userId: 1,
          comment: "What a great night. Thanks Bro!",
        },
        {
          openTabId: 1,
          userId: 2,
          comment: "Life saver! Don't know what I'd do without you",
        },
        {
          openTabId: 1,
          userId: 1,
          comment: "Anytime mate!",
        },
        {
          openTabId: 1,
          userId: 1,
          comment: "Thanks again",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
