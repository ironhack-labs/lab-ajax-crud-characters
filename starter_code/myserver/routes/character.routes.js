const express = require('express');
const router = express.Router();
const characterController=require("../controllers/character.controller");

/* GET home page. */
router.get('/', characterController.show);

module.exports = router;