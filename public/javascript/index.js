const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {

    charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {

    const characterId = Number(event.path[1].children[1].value);

    charactersAPI.getOneRegister(characterId);

  });

  document.getElementById('delete-one').addEventListener('click', (event) => {

  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {

  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {

  });
});
