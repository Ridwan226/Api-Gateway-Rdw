var express = require("express");
var router = express.Router();

const { APP_NAME } = process.env;

/* GET Media listing. */
router.get("/", function (req, res, next) {
  res.send("Media");
});

module.exports = router;
