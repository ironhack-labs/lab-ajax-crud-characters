const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
    // document.querySelectorAll('name').innerHTML = name;
  };

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id);
  };

  document.getElementById('delete-one').onclick = function () {

  };

  document.getElementById('edit-character-form').onsubmit = function () {

  };

  document.getElementById('new-character-form').onsubmit = function () {

  };
});
