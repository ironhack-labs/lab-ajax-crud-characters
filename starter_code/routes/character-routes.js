const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character-controller");

router.get("/", character-controller.show);

module.exports = router;
