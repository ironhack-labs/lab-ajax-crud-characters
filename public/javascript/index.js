const router = require("express").Router();
const APIHandler = require('../javascript/APIHandler')
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    router.get('/characters/list', (req, res) => {
    charactersAPI
    .getFullList()
    .then((response) => {
      res.json(response.data)
    })
    .catch(error => console.log(error))
  });
  })
  document.getElementById('fetch-one').addEventListener('click', function (event) {
router.get('caracters/:id', (req, res) => {
  charactersAPI
  .getOneRegister (characterId)
  .then((response) => {
    res.json(response.data)
  })
  .catch(error => console.log(error))
});
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    router.get('/characters/delete/:id', (req, res) => {
      const characterId = req.params.id;
      charactersAPI
        .deleteOneRegister (characterId)
        .then((response) => {
           res.json(response.data);
        })
        .catch(error => console.log(error));
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    router.post('/movie-characters/edit/:id', (req, res) => {
      const characterId = req.params.id;
      const characterInfo = req.body;
      charactersAPI
        .updateOneRegister (characterId, characterInfo)
        .then((response) => {
          res.json(response.data);
        })
        .catch((error) => console.log(error));
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    router.post('/movie-characters/create', (req, res) => {
      const characterInfo = req.body;
      charactersAPI
        .createOneRegister (characterInfo)
        .then((response) => {
          res.json(response.data);
        })
        .catch((error) => console.log(error));
    });
  });
});
