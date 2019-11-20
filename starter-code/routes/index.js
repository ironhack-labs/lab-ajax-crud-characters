const router = require('express').Router()


/*
const {
    getFullList, 
    getOneRegister, 
    createOneRegister, 
    updateOneRegister, 
    deleteOneRegister
} = require("./public/javascript/APIHandler")*/


router
    .get('/', (req, res, next) => {
        res.render('index');
    })
  
module.exports = router;