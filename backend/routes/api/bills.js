//ToDo: create a route to return users bills

const express = require("express");
const asyncHandler = require("express-async-handler");
const { Open_tab } = require("../../db/models");

const router = express.Router();

router.get(
  `/bills/:id`,
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const data = await Open_tab.getAll(id);
    res.json({ data });
  })
);

module.exports = router;
