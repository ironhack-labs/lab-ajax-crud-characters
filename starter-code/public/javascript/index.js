/* eslint-disable func-names */
const charactersAPI = new APIHandler('http://localhost:8000');

const characterContainer = document.querySelector('.characters-container');
$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function (event) {
    event.preventDefault();
    document.querySelector('#send-data-create').style.background = 'none';
    document.querySelector('#send-data-edit').style.background = 'none';
    document.querySelector('#delete-one').style.background = 'none';
    characterContainer.innerHTML = '';
    charactersAPI.getFullList()
      .then((fullList) => {
        fullList.forEach((character) => {
          characterContainer.innerHTML += `<div class="character-info">
          <div class="id">Id: <span>${character.id}</span></div>
          <div class="name">Character Name: <span>${character.name}</span></div>
          <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
          <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
        </div>`;
        });
      });
  };

  document.getElementById('fetch-one').onclick = function (event) {
    event.preventDefault();
    document.querySelector('#send-data-create').style.background = 'none';
    document.querySelector('#send-data-edit').style.background = 'none';
    document.querySelector('#delete-one').style.background = 'none';

    characterContainer.innerHTML = '';
    charactersAPI.getOneRegister(document.querySelector('input[name="character-id"]').value)
      .then((character) => {
        characterContainer.innerHTML += `<div class="character-info">
          <div class="id">Id: <span>${character.id}</span></div>
          <div class="name">Character Name: <span>${character.name}</span></div>
          <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
          <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
        </div>`;
      });
  };

  document.getElementById('delete-one').onclick = function (event) {
    event.preventDefault();
    document.querySelector('#send-data-create').style.background = 'none';
    document.querySelector('#send-data-edit').style.background = 'none';
    charactersAPI.deleteOneRegister(document.querySelector('input[name="character-id-delete"]').value)
      .then((response) => {
        if (response.status === 200) {
          document.querySelector('#delete-one').style.background = 'lightgreen';
        }
      })
      .catch((err) => {
        document.querySelector('#delete-one').style.background = 'red';
      });
  };

  document.getElementById('edit-character-form').onsubmit = function (event) {
    event.preventDefault();
    document.querySelector('#send-data-create').style.background = 'none';
    document.querySelector('#delete-one').style.background = 'none';
    const updateForm = document.querySelector('#edit-character-form');
    const chrId = updateForm.querySelector('input[name="chr-id"]').value;
    const name = updateForm.querySelector('input[name="name"]').value;
    const occupation = updateForm.querySelector('input[name="occupation"]').value;
    const weapon = updateForm.querySelector('input[name="weapon"]').value;
    const cartoon = updateForm.querySelector('input[name="cartoon"]').checked;
    const updateInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    charactersAPI.updateOneRegister(chrId, updateInfo)
      .then((response) => {
        if (response === 200) {
          document.querySelector('#send-data-edit').style.background = 'lightgreen';
        }
      })
      .catch((err) => {
        document.querySelector('#send-data-edit').style.background = 'red';
      });
  };

  document.getElementById('new-character-form').onsubmit = function (event) {
    event.preventDefault();
    document.querySelector('#send-data-edit').style.background = 'none';
    document.querySelector('#delete-one').style.background = 'none';
    const createForm = document.querySelector('#new-character-form');
    const name = createForm.querySelector('input[name="name"]').value;
    const occupation = createForm.querySelector('input[name="occupation"]').value;
    const weapon = createForm.querySelector('input[name="weapon"]').value;
    const cartoon = createForm.querySelector('input[name="cartoon"]').checked;
    const createInfo = {
      name,
      occupation,
      weapon,
      cartoon,
    };
    charactersAPI.createOneRegister(createInfo)
      .then(() => {
        document.querySelector('#send-data-create').style.background = 'lightgreen';
      })
      .catch((err) => {
        document.querySelector('#send-data-create').style.background = 'red';
      });
  };
});