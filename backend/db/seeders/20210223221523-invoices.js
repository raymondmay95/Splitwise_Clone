"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Invoices",
      [
        {
          groupId: 1,
          details: "for rent",
          photo:
            "https://www.chartattack.com/wp-content/uploads/2021/02/house-696x466.jpg",
          amount: 950.0,
        },
        {
          groupId: 3,
          details: "for movies",
          photo:
            "https://media.titanbooks.com/catalog/products/GeminiMan_novel.jpg",
          amount: 17.9,
        },
        {
          groupId: 3,
          details: "for dinner",
          photo:
            "https://media.titanbooks.com/catalog/products/GeminiMan_novel.jpg",
          amount: 57.43,
        },
        {
          groupId: 3,
          details: "for Ride",
          photo:
            "https://media.titanbooks.com/catalog/products/GeminiMan_novel.jpg",
          amount: 10,
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
    return queryInterface.bulkDelete("Invoices", null, {});
  },
};
