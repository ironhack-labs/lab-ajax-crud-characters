const express = require('express');
const router = express.Router();
const Character = require("../models/characters")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/characters", (req, res) => {
  Character
    .find()
    .then(characters => res.json(characters))
});

router.get("/characters/:id", (req, res) => {
  Character
    .findById({ _id: req.params.id })
    .then(charactersID => res.json(charactersID))
})
router.post("/characters", (req, res) => {
  Character
    .create({
      name: req.body.name,
      occupation: req.body.occupation,
      cartoon: req.body.cartoon,
      weapon: req.body.weapon
    })
    .then(character => res.json(character))
    .catch(err => res.json(err))
})
router.put("/characters/:id", (req, res)=>{
  Character
    .findByIdAndUpdate({_id: req.params.id},req.body, {new: true})
    .then(character => res.json(character))
    .catch(res.json({error: "Character not found"}))
})

router.delete("/characters/:id", (req, res) => {
  Character
  .findByIdAndDelete(req.params.id)
  .then(res.json({message: "Character has been successfully deleted"}))
  .catch(res.json({message: "Character not found"}))
})

module.exports = router;
