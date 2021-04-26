const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const userRouter = require("./user.js");
const commentsRouter = require("./comment.js");
const activityRouter = require("./activity.js");
const friendsRouter = require("./friends.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/user/balance", userRouter);
router.use("/comments", commentsRouter);
router.use("/activity", activityRouter);
router.use("/friends", friendsRouter);

module.exports = router;
