const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

router.get('/characters', (req, res) => {
    res.json(characters);
  });

router.post('/characters', (req, res) => {
    const characterInfo = req.body;
   
    apiService
      .createCharacter(characterInfo)
      .then((response) => {
   
        res.redirect('/characters');
      })
      .catch((error) => console.log(error));
  });

router.get('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const character = characters.find(char => char.id === id);
  
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
  
    res.json(character);
  });

router.get('/characters/:id', (req, res) => {
    const characterId = req.params.id;
   
    apiService
      .deleteCharacter(characterId)
      .then((response) => {
   
        res.redirect(`/characters/:id`);
      })
      .catch(error => console.log(error));
  });

router.post(`/characters/:id`, (req, res) => {
    const characterId = req.params.id;
    const characterInfo = req.body;
   
    apiService
      .editCharacter(characterId, characterInfo)
      .then((response) => {
   
        res.redirect(`/characters/:id`);
      })
      .catch((error) => console.log(error));
  });

  module.exports = router;