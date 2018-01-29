const express = require('express');
const router = express.Router();
const characterController=require("../controllers/character.controller");

/* GET home page. */
router.get('/', characterController.show);
router.get('/:id', characterController.showById);
router.post('/', characterController.create);
router.post('/update/:id', characterController.updateById);
router.post('/delete/:id', characterController.deleteById);

module.exports = router;