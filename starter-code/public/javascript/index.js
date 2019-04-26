const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  };

  document.getElementById('fetch-one').onclick = function () {
    const id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id);
  };

  document.getElementById('delete-one').onclick = function () {
    const del = document.getElementById('delete').value;
    charactersAPI.deleteOneRegister(del);
  };

  document.getElementById('edit-character-form').onsubmit = function (event) {
    event.preventDefault();
    const idEdit = document.getElementById('id2').value;
    const nameEdit = document.getElementById('name2').value;
    const occupationEdit = document.getElementById('occupation2').value;
    const weaponEdit = document.getElementById('weapon2').value;
    const cartoonEdit = document.getElementById('cartoon2').value;
    charactersAPI.updateOneRegister(idEdit, nameEdit, occupationEdit, weaponEdit, cartoonEdit);
  };

  document.getElementById('new-character-form').onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    const cartoon = document.getElementById('cartoon').value;
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
