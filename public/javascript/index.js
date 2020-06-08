const charactersAPI = new APIHandler('http://localhost:8001');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const userInput = document.querySelector('input[name="character-id"]').value;
    charactersAPI.getOneRegister(userInput);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idCharToDelete = document.querySelector('input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(idCharToDelete)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    const updateChar = {
      id: document.querySelector('input[name="chr-id"]').value,
      name: document.getElementById('updateName').value,
      occupation: document.getElementById('updateOccupation').value,
      weapon: document.getElementById('updateWeapon').value,
      cartoon: document.getElementById('updateCartoon').checked
    }; 
    charactersAPI.updateOneRegister(updateChar);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    console.log(event)

    const newChar = {
      name: document.getElementById('newName').value,
      occupation: document.getElementById('newOccupation').value,
      weapon: document.getElementById('newWeapon').value,
      cartoon: document.getElementById('newCartoon').checked,
    }; 
    charactersAPI.createOneRegister(newChar);
  });
});
