const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Owner } = require("../../db/models");
const db = require("../../db/models");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const data = await Owner.allActivity(id);
    console.log(data);
    res.json({ data });
  })
);

module.exports = router;
