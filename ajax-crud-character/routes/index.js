const express = require('express');
const router  = express.Router();
const Character = require('../models/characters.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/characters', (req,res, next) => {
  Character.find()
  .then(characters => {
    res.json(characters);
  })
  .catch(error => {
    console.log(error)
  })
});

router.get('/characters/:id', (req,res, next) => {
  console.log(req.params.id)
  Character.findOne({id: req.params.id})
  .then(character => {
    res.json(character);
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/characters', (req,res, next) => {
  const newCharacter = new Character({
    id: req.body.id,
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    cartoon: req.body.cartoon
  })
  
  newCharacter.save()
  .then(characters => {
    res.json(characters);
  })
  .catch(error => {
    console.log(error)
  })
});

router.put('/characters/:id', (req,res, next) => {
  console.log("In PUT")
  const updateCharacter = {
    name: req.body.name,
    occupation: req.body.occupation,
    weapon: req.body.weapon,
    cartoon: req.body.cartoon
  }

  Character.updateOne({id: req.params.id}, updateCharacter)
  .then(characters => {
    res.json(characters);
  })
  .catch(error => {
    console.log(error)
  })
});

router.delete('/characters/:id', (req,res, next) => {
  Character.deleteOne({id: req.params.id})
  .then(characters => {
    res.json(characters);
  })
  .catch(error => {
    console.log(error)
  })
});




module.exports = router;
