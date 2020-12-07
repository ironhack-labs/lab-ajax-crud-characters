const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    let idToSearch = document.getElementById('character-to-fetch').value;
    console.log(idToSearch)
    charactersAPI.getOneRegister(idToSearch);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let idToDelete = document.getElementById('character-to-delete').value;
    charactersAPI.deleteOneRegister(idToDelete);

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
