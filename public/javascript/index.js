const axios = require('axios');

const APIHandler = require('./public/javascript/APIHandler');

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    await charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.querySelector('[name="character-id"]').value;
    await charactersAPI.getOneRegister(characterId);
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterIdToDelete = document.querySelector('[name="character-id-delete"]').value;
    await charactersAPI.deleteOneRegister(characterIdToDelete);
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const characterIdToUpdate = document.querySelector('[name="chr-id"]').value;
    const updatedCharacterData = {
      name: document.querySelector('[name="name"]').value,
      occupation: document.querySelector('[name="occupation"]').value,
      weapon: document.querySelector('[name="weapon"]').value,
      cartoon: document.querySelector('[name="cartoon"]').checked,
    };
    await charactersAPI.updateOneRegister(characterIdToUpdate, updatedCharacterData);
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const newCharacterData = {
      name: document.querySelector('#new-character-form [name="name"]').value,
      occupation: document.querySelector('#new-character-form [name="occupation"]').value,
      weapon: document.querySelector('#new-character-form [name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form [name="cartoon"]').checked,
    };
    await charactersAPI.createOneRegister(newCharacterData);
  });
});
