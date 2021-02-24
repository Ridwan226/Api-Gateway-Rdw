var express = require("express");
var router = express.Router();

const { APP_NAME } = process.env;

/* GET Ordres listing. */
router.get("/", function (req, res, next) {
  res.send("Ordres");
});

module.exports = router;
