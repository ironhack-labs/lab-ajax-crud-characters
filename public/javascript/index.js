const charactersAPI = new APIHandler('http://localhost:8000');

obj = {
  "cartoon": false
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    // charactersAPI.getOneRegister(id)
    charactersAPI.updateOneRegister(1, obj)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    // charactersAPI.updateOneRegister(1, obj)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister(obj)
  });
});
