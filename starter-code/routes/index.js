const express = require('express');
const router  = express.Router();
const Character = require("../models/characters")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/characters", (req,res)=> {
    Character
      .find()
      .then(characters => res.json(characters))
});

module.exports = router;
