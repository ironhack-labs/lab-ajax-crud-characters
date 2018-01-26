const express = require('express');
const router = express.Router();
const characterController=require("../controllers/character.controller");

/* GET home page. */
router.get('/', characterController.show);
router.post('/', characterController.create);

module.exports = router;