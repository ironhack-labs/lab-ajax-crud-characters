const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById('fetch-one').onclick = function() {
    let charID = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(charID);
  };

  document.getElementById('delete-one').onclick = function() {
    let charID = document.getElementById('d-character-id').value;
    charactersAPI.deleteOneRegister(charID);
  };

  document.getElementById('edit-character-form').onsubmit = function() {
    let theId = document.getElementById('id').value;
    let name = document.getElementById('u-name').value;
    let occupation = document.getElementById('u-occupation').value;
    let weapon = document.getElementById('u-weapon').value;
    let cartoon = document.getElementById('u-cartoon').checked;

    charactersAPI.updateOneRegister(theId, name, occupation, weapon, cartoon);
  };

  document.getElementById('new-character-form').onsubmit = function() {
    let name = document.getElementById('name').value;
    let occupation = document.getElementById('occupation').value;
    let weapon = document.getElementById('weapon').value;
    let cartoon = document.getElementById('cartoon').checked;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
