const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const commentsRouter = require("./comment.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use("/comments", commentsRouter);

module.exports = router;
