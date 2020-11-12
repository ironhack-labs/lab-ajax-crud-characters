const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const updateCharacter = id => {
      console.log(`Char ID:${id}`);
      document.getElementById(`update-form-div`).style.display = "block"
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
