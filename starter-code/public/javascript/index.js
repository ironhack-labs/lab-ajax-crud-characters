const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {

  //
  // actions by CRUD order
  //

  document.getElementById('new-character-form').onsubmit = function () {
    const name       = document.getElementById('newChar-name').value;
    const occupation = document.getElementById('newChar-occupation').value;
    const weapon     = document.getElementById('newChar-weapon').value;
    const cartoon    = document.getElementById('newChar-cartoon').checked;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);

  };
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  };

  document.getElementById('fetch-one').onclick = function () {
    const findOne = document.getElementById('fetch-one-input').value;
    charactersAPI.getOneRegister(findOne);
  };

  document.getElementById('edit-character-form').onsubmit = function () {
    const deleteOne = document.getElementById('delete-one-input').value;
    charactersAPI.updateOneRegister(deleteOne);
  };

  document.getElementById('delete-one').onclick = function () {
    const deleteOne = document.getElementById('delete-one-input').value;
    charactersAPI.deleteOneRegister(deleteOne);
  };
});
