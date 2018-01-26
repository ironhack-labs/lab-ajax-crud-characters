// const mongoose = require('mongoose');
// const User = require('../models/user.model');

module.exports.show = (req, res, next) => {
  console.log(req.user);
  res.send("TOMA CHARACTERS");
    // res.render('user/profile', {
    //     session: req.user
    // });
    
};