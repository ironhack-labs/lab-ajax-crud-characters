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
    const idToDelete = document.getElementById('idToDelete').value;
    charactersAPI.deleteOneRegister(idToDelete);

  };

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()
    const name2 = document.querySelector('#name2').value;
    const occupation2 = document.getElementById('occupation2').value;
    const weapon2 = document.getElementById('weapon2').value;
    const cartoon2 = document.getElementById('cartoon2').checked ? true : false;
    const obj2 = {
      name:name2,
      occupation:occupation2,
      weapon:weapon2,
      cartoon:cartoon2,
    };
    charactersAPI.updateOneRegister(obj2);
  };

  document.getElementById('new-character-form').onsubmit = function (e) {
    const name = document.querySelector('#new-character-form #name').value;
    const occupation = document.querySelector('#new-character-form #occupation').value;
    const weapon = document.querySelector('#new-character-form #weapon').value;
    const cartoon = $('#new-character-form #cartoon').is(':checked') ? true : false;
    const obj = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    charactersAPI.createOneRegister(obj);
  };
});
