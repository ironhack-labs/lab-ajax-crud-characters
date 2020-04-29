/* jshint esversion: 9*/
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById('char-id').value;
    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.getElementById('del-id').value;
    charactersAPI.deleteOneRegister(characterId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterId = document.getElementById('chr-id').value;
    const updateName = document.getElementById('new-name').value;
    const updateOccupation = document.getElementById('new-occupation').value;
    const updateWeapon = document.getElementById('new-weapon').value;
    const updateCartoonValue = document.getElementById('new-type').value;

    charactersAPI.updateOneRegister(characterId, updateName, updateOccupation, updateWeapon, updateCartoonValue);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name= document.getElementById('newCharName').value;
    const occupation = document.getElementById('newCharOcc').value;
    const weapon = document.getElementById('newCharWeapon').value;
    const cartoon = document.getElementById('newCharType').value;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  });
});
