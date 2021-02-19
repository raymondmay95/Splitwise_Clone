const express = require("express");
const router = express.Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("/", (req, res) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("API Home");
});
module.exports = router;
