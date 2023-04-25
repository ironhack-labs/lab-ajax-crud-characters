const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document
    .getElementById('fetch-all')
    .addEventListener('click', async (event) => {
      const listOfAll = await charactersAPI.getFullList();
      console.log(listOfAll);
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
