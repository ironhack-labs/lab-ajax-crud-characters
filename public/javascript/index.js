const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let id = document.getElementsByName("character-id");
    charactersAPI.getOneRegister(id[0].value);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementsByName("character-id-delete");
    charactersAPI.deleteOneRegister(id[0].value);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
