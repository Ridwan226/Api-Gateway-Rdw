const express = require("express");
const router = express.Router();
const mediaHendler = require("./heandler/media");
const { APP_NAME } = process.env;

/* GET Media listing. */
router.post("/", mediaHendler.create);
router.get("/", mediaHendler.getAll);
router.delete("/:id", mediaHendler.destroy);

module.exports = router;
