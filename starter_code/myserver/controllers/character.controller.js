const mongoose = require('mongoose');
const Character = require('../models/character.model');

module.exports.show = (req, res, next) => {
  console.log("MUESTRA");
  res.json({Suerte:"LLEGO"});
    // res.render('user/profile', {
    //     session: req.user
    // });
    
};
module.exports.create = (req, res, next) => {
  console.log(req.body.firstName);
  res.json({Suerte:"LLEGO"});
    // res.render('user/profile', {
    //     session: req.user
    // });
    
};