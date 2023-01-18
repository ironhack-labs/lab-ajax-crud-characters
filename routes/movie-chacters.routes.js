const { response } = require('express');
const express = require('express');
const router = express.Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

router.get('/movie-character/list', (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) =>{
        res.render()
    })
})