const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById('character-id').value
    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;
    console.log(id);
    charactersAPI.deleteOneRegister(id);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value
    const name = document.getElementById('edit-name').value
    const occupation = document.getElementById('edit-occupation').value
    const weapon = document.getElementById('edit-weapon').value
    const cartoon = document.getElementById('edit-cartoon').checked
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const cartoon = document.getElementById('new-cartoon').checked ? true : false;

    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  });
});
