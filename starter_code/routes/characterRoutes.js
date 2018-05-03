const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const Characters = require('../models/characters');
const router = express.Router();



router.get('/', (req, res, next) => {
  res.render('../views/index');
});


router.get("/characters", (req, res, next) => {

  
  Characters.find((err, chars) => {
      
      res.json(chars)


  })
});

router.post('/characters', function(req, res) {
  const newChar = new Characters({
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    cartoon: req.body.cartoon,

  })
  newChar.save()
  .then(chars => {console.log("plz y", chars) })
  .catch(error =>{console.log("error", error) })
  res.redirect('/')

})

router.get("/characters/:id", (req, res, next) => {

  Characters.findOne({id: req.params.id}, (err, theChar) => {
    res.json(theChar)
  })
})

//end new char button click function







module.exports = router;