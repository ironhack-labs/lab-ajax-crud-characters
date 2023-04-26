const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const response = await charactersAPI.getFullList("characters");
    console.log("Here is all characters ", response)
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const idInput = document.querySelector("#characterId").value;
    const response = await charactersAPI.getOneRegister("characters", idInput);
    console.log(response)
    });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
