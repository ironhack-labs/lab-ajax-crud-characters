const baseUrl = 'http://localhost:8000/characters';

const charactersAPI = new APIHandler(baseUrl);

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {});

  document.getElementById('fetch-one').addEventListener('click', (event) => {
    const id = document.getElementsByName('character-id')

    const name = document.querySelector('.character-info .name');

    charactersAPI.getOneRegister(id);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {});

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {});

  document.getElementById('new-character-form').addEventListener('submit', function (event) {});
});
