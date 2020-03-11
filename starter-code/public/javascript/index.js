const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('character-id').value);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('character-id-delete').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterId = document.getElementById('chr-id').value;
    const characterInfo = { 
      name: document.getElementById("name-id").value,
      occupation: document.getElementById("occupation-id").value,
      cartoon: document.getElementById("cartoon-id").checked,
      weapon: document.getElementById("weapon-id").value,
    };
    charactersAPI.updateOneRegister(characterId, characterInfo);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterInfo = { 
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      cartoon: document.getElementById("cartoon").checked,
      weapon: document.getElementById("weapon").value,
    };
    charactersAPI.createOneRegister(characterInfo);
  });
});
