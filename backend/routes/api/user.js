const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
//ToDo: get user balance for response
router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { accountBalance } = await req.user.dataValues;
    res.json({ accountBalance });
  })
);

module.exports = router;
