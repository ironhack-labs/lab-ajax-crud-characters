const mongoose = require('mongoose');
const Character = require('../models/character.model');

module.exports.show = (req, res, next) => {
  Character.find()
    .then((characters) => {
      res.json({
        characters
      });
    }).catch(error => next(error));

};
module.exports.showById = (req, res, next) => {
  const _id = req.params.id;
  if (!_id) {
    res.json({
      error: {
        id: _id ? '' : 'id is required'
      }
    });
  } else {
    Character.findById(req.params.id)
      .then((characters) => {

        res.json({
          characters
        });
      }).catch(error => next(error));
  }
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
              Character.find()
                .sort({
                  createdAt: -1
                })
                .then((characters) => {
                  res.json({
                    characters: characters,
                    message: 'Character save succesfully!!'
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
module.exports.updateById = (req, res, next) => {
  const {
    id,
    name,
    occupation,
    debt,
    weapon
  } = req.body;
  if (!id || !name || !occupation || !debt || !weapon) {
    res.json({
      error: {
        id: id ? '' : 'id is required',
        name: name ? '' : 'name is required',
        occupation: occupation ? '' : 'occupation is required',
        debt: debt ? '' : 'debt is required',
        weapon: weapon ? '' : 'weapon is required'
      }
    });
  } else {
    const character = new Character(req.body);
    Character.findByIdAndUpdate(character._id, character)
      .then(currentCharac => {
        Character.find()
          .sort({
            createdAt: -1
          })
          .then((characters) => {
            res.json({
              characters: characters,
              message: 'Character update succesfully!!'
            });
          }).catch(error => next(error));
      })
      .catch(error => next(error));
  }
};

module.exports.deleteById = (req, res, next) => {
  const _id = req.params.id;
  if (!_id) {
    res.json({
      error: {
        id: _id ? '' : 'id is required'
      }
    });
  } else {
    Character.findByIdAndRemove(req.params.id)
      .then((characters) => {
        Character.find()
          .sort({
            createdAt: -1
          })
          .then((characters) => {
            res.json({
              characters: characters,
              message: 'Character Deleted succesfully!!'
            });
          }).catch(error => next(error));
      }).catch(error => next(error));
  }
};