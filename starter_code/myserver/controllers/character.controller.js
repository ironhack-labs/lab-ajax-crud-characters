const mongoose = require('mongoose');
const Character = require('../models/character.model');

module.exports.show = (req, res, next) => {
  Character.find()
  .sort({ createdAt: -1 })
  .then((characters) => {
    res.json({
      characters:characters
    });
  }).catch(error => next(error));

};
module.exports.create = (req, res, next) => {
  const {
    name,
    occupation,
    debt,
    weapon
  } = req.body;
  if (!name || !occupation || !debt || !weapon) {
    res.json({
      error: {
        name: name ? '' : 'name is required',
        occupation: occupation ? '' : 'occupation is required',
        debt: debt ? '' : 'debt is required',
        weapon: weapon ? '' : 'weapon is required'
      }
    });
  } else {
    Character.findOne({
        name: name
      })
      .then(character => {
        if (character != null) {
          res.json({
            error: {
              name: 'name already exists'
            }
          });
        } else {
          character = new Character(req.body);
          character.save()
            .then(() => {
              Character.find().then((characters) => {
                res.json({
                  characters:characters,
                  message:'Character save succesfully!!'
                });
              }).catch(error => next(error));
            })
            .catch(error => {
              if (error instanceof mongoose.Error.ValidationError) {
                res.json({
                  character: character,
                  error: error.errors
                });
              } else {
                next(error);
              }
            });
        }
      }).catch(error => next(error));
  }

};