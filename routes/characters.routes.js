// routes/movie-characters.routes.js

const router = require("express").Router();
const ApiService = require('../services/api.service');
const apiService = new ApiService();

// List all the characters from the API.
//   res.send(`Here we'll render the characters list`);
router.get('/characters', (req, res) => {
    apiService
      .getAllCharacters()
      .then((response) => {
        res.json(response.data);
        // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
      })
      .catch(error => console.log(error));
  });


// Render a form to edit a character.
router.get('/characters/:id', (req, res) => {
    const {name , occupation, cartoon, weapon} = req.body

    apiService
      .createCharacter({name , occupation, cartoon, weapon})
      .then((response) => {
        res.json(response.data);
        // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
      })
  //res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
});

router.post('/characters/:id', (req, res) => {
    const {name , occupation, cartoon, weapon} = req.body
    const {characterId} = req.params
    if (  title !== "" && occupation !== "" && cartoon !== "" && weapon !== ""){
    apiService
     .editCharacter(characterId, {name , occupation, cartoon, weapon} )
      .then((response) => {
        res.json(response.data);
        // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
      })
      .catch(err => res.send("Character not found", err))
  //res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
}});

// Delete a character with a matching id.
router.delete('/characters/:id', (req, res) => {
    const { id } = req.params

    apiService
    .deleteCharacter(id)
    .then(response => res.send('Character has been successfully deleted'))
    .catch((error) => res.send("Character not found", error));
  //res.send(`Here we'll delete character with ID ${req.params.id}`);
});

module.exports = router;