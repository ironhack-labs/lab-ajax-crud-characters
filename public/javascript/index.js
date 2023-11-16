
const APIHandler = require('./public/javascript/APIHandler');

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const response = await charactersAPI.getFullList();
      console.log('Full list', response.data);
    } catch (error) {
      console.error('Error while fetching full list', error);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const characterId = document.querySelector('[name="character-id"]').value;
    try {
      const response = await charactersAPI.getOneRegister(characterId);
      console.log('Single Character', response.data);
    } catch (error) {
      console.error('Error while fetching single character', error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const characterIdToDelete = document.querySelector('[name="character-id-delete"]').value;
    try {
      const response = await charactersAPI.deleteOneRegister(characterIdToDelete);
      console.log('Character Deleted:', response.data);
    } catch (error) {
      console.error('Error while deleting character', error);
    }
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
    try {
      const response = await charactersAPI.updateOneRegister(characterIdToUpdate, updatedCharacterData);
      console.log('Character Updated:', response.data);
    } catch (error) {
      console.error('Error while updating character:', error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const newCharacterData = {
      name: document.querySelector('#new-character-form [name="name"]').value,
      occupation: document.querySelector('#new-character-form [name="occupation"]').value,
      weapon: document.querySelector('#new-character-form [name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form [name="cartoon"]').checked,
    };
    try {
      const response = await charactersAPI.createOneRegister(newCharacterData);
      console.log('Character Created', response.data);
    } catch (error) {
      console.error('Error while creating character', error);
    }
  });
});