const express = require('express');
const router  = express.Router();
const characterController = require('../controllers/character.controller');

router.get('/', (req, res, next) => {
  characterController.getAllCharacters()
    .then(characters => res.json(characters))
    .catch(err => console.error(err));
});
router.get('/:id', (req, res, next) => {
  
});
router.post('/', (req, res, next) => {
  
});
router.put('/:id', (req, res, next) => {
  
});
router.delete('/:id', (req, res, next) => {
  
});

module.exports = router;
