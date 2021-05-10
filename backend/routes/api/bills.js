//ToDo: create a route to return users bills

const express = require("express");
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

const router = express.Router();

router.get(
  `/bills/:id`,
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const data = await db.Open_tab.findByPk(id);
    res.json(data);
  })
);

module.exports = router;
