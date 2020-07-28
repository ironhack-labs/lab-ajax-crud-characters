const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister();
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(4);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const updatedCharacterInfo = {
      name: 'Batman',
      occupation: "test",
      weapon: "test",
      cartoon: true
    };

    charactersAPI.updateOneRegister(1, updatedCharacterInfo)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const newCharacter = {
      name: "Spider-man",
      occupation: "Making webs",
      weapon: "webs",
      cartoon: true
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});