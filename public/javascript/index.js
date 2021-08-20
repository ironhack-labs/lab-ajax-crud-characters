const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let characters =
    (async () => {
      const characters = await charactersAPI.getFullList();
      console.log(characters);
    }); 
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementsByName('character-id-delete')[0].value; 
    charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let id = document.getElementsByName('chr-id')[0].value;

    let updatedObj = { name: document.getElementById('updateName').value,
      occupation: document.getElementById('updateOccupation').value, 
      cartoon: document.getElementById('updateWeapon').value, 
      weapon: document.getElementById('updateCartoon').value};
    charactersAPI.updateOneRegister(id, updatedObj);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let createObj = { name: document.getElementById('createName').value,
    occupation: document.getElementById('createOccupation').value, 
    cartoon: document.getElementById('createWeapon').value, 
    weapon: document.getElementById('createCartoon').value};
    charactersAPI.createOneRegister(createObj);
  });
});
