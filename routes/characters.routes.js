// routes/movie-characters.routes.js
 
const router = require("express").Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();




// List all the characters from the API.
router.get('/characters', (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) => {
      res.json(response.data);
      // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })
    .catch(error => console.log(error));
});



/* // Render a form to create a new character.
router.get('/characters/create', (req, res) => {
  res.send(`Here we'll render the form to create a new characters`);
});
 
// Submit info to create a new character.
router.post('/characters/create', (req, res) => {
  res.send(`Here we'll send the form to create a new characters`);
});
 
// Render a form to edit a character.
router.get('/characters/edit/:id', (req, res) => {
  res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
});
 
// Submit info to edit a character with a matching id.
router.post('/characters/edit/:id', (req, res) => {
  res.send(`Here we'll send the form to update character with ID ${req.params.id}`);
});
 
// Delete a character with a matching id.
router.get('/characters/delete/:id', (req, res) => {
  res.send(`Here we'll delete character with ID ${req.params.id}`);
});
 
module.exports = router; */