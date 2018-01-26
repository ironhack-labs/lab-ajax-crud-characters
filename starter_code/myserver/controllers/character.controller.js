const mongoose = require('mongoose');
const Character = require('../models/character.model');

module.exports.show = (req, res, next) => {
  console.log("MUESTRA");
  res.json({
    Suerte: "LLEGO"
  });
  // res.render('user/profile', {
  //     session: req.user
  // });

};
module.exports.create = (req, res, next) => {
  const {name, occupation, debt, weapon} = req.body;
  if (!name || !occupation || !debt || !weapon) {
    res.json({
      error: {
        name: name ? '' : 'name is required',
        occupation: occupation ? '' : 'occupation is required',
        debt: debt ? '' : 'debt is required',
        weapon: weapon ? '' : 'weapon is required'
      }
    });
  }else{
    console.log(name+'AAAAAAAAAAAAAAAAAAA');
    
    Character.findOne({
      name: name
    })
    .then(character => {
      console.log(name+'AAAAAAAAAAAAAAAAAAA');
      if (character != null) {
        res.json({
          error: {
            name: 'name already exists'
          }
        });
      } else {
        console.log("AAAAAAAA");
        character = new Character(req.body);
        character.save()
          .then(() => {
            res.json({
              Suerte: "CREACION DE PERSONAJE CORRECTA"
            });
          }).catch(error => {
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