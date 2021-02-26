const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Friend } = require("../../db/models");
const db = require("../../db/models");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const data = await Friend.allFriends(id);
    const friendIds = data.map((friend) => Number(friend.id));
    const friendsNames = await User.findAllUsers(...friendIds);
    res.json(friendsNames);
  })
);

module.exports = router;
