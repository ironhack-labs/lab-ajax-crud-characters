const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementById('search-id').value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementById('delete-id').value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('edit-id').value
    const name = document.getElementById('edit-name').value
    const occupation = document.getElementById('edit-occupation').value
    const weapon = document.getElementById('edit-weapon').value
    const cartoon = document.getElementById('edit-cartoon').value
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value
    const occupation = document.getElementById('occupation').value
    const weapon = document.getElementById('weapon').value
    const cartoon = document.getElementById('cartoon').value
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  });
});
