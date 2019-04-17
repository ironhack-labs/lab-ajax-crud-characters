const express = require('express');
const router  = express.Router();
const characterController = require('../controllers/character.controller');

router.get('/', (req, res, next) => {
  characterController.getAllCharacters()
    .then(characters => res.json(characters))
    .catch(err => {
      res.status(500).json({
        status: 500,
        message: err,
      })
    });
});
router.get('/:id', (req, res, next) => {
  characterController.getCharacterById(req.params.id)
    .then(character => res.json(character))
    .catch(err => {
      res.status(500).json({
        status: 500,
        error: err,
      });
    });
});
router.post('/', (req, res, next) => {
  characterController.createCharacter(req.body)
    .then(response => res.json(response))
    .catch(err => {
      res.status(500).json({
        status: 500,
        error: err,
      });
    });
});
router.put('/:id', (req, res, next) => {
  characterController.updateCharacter(req.params.id, req.body)
    .then(response => res.json(response))
    .catch(err => {
      res.status(500).json({
        status: 500,
        error: err,
      });
    });
});
router.delete('/:id', (req, res, next) => {
  
});

module.exports = router;
