const express = require('express');
const router  = express.Router();
const characterController = require('../controllers/character.controller');

router.get('/', (req, res, next) => characterController.manageResponse(
  res, 
  characterController.getAllCharacters()
));

router.get('/:id', (req, res, next) => characterController.manageResponse(
  res, 
  characterController.getCharacterById(req.params.id)
));

router.post('/', (req, res, next) => characterController.manageResponse(
  res, 
  characterController.createCharacter(req.body)
));

router.put('/:id', (req, res, next) => characterController.manageResponse(
    res, 
    characterController.updateCharacter(req.params.id, req.body)
));

router.delete('/:id', (req, res, next) => characterController.manageResponse(
  res, 
  characterController.deleteCharacter(req.params.id)
));

module.exports = router;
