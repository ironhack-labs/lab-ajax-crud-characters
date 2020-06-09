const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    //const charatecrinput = document.getElementById('fecthById').value
    charactersAPI.getOneRegister(document.getElementById('fecthById').value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('deleteCharacter').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const editCharacter = {
      id: document.getElementById('editId').value,
      name: document.getElementById('editName').value,
      occupation: document.getElementById('editOccupation').value,
      weapon: document.getElementById('editWeapon').value,
      cartoon: document.getElementById('editCartoon').checked

    }
    charactersAPI.updateOneRegister(editCharacter.id, editCharacter)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const objCharacter = {
      name: document.getElementById('newName').value,
      occupation: document.getElementById('newOcuppation').value,
      weapon: document.getElementById('newWeapon').value,
      cartoon: document.getElementById('newCartoon').checked

    }
    charactersAPI.createOneRegister(objCharacter)
  });
});