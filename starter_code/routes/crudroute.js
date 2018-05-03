

const express     = require("express");
const crudroute   = express.Router();
const Character   =require('../models/character')



crudroute.get('/characters', (req, res, next)=>{

Character.find()
.then((list)=>{
  res.json(list);
})
.catch((error)=>{
  res.json(error)
})

})


 





module.exports = crudroute;

