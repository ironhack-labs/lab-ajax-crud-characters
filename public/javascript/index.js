const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('search-by-id').value);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('delete-by-id').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const charId = document.getElementById('id-input').value;
    event.preventDefault();
    charactersAPI.updateOneRegister(charId);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    charactersAPI.createOneRegister();
  });
});
