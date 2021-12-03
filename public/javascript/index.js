const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const allChars = await charactersAPI.getFullList()
    console.log(allChars.data);
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    // get id input from field
    const charID = document.querySelector(".operation input").value
    const oneChar = await charactersAPI.getOneRegister(charID)
    console.log(oneChar.data);
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    // get id input from field
    const charID = document.querySelector(".operation.delete input").value
    const deletedChar = await charactersAPI.deleteOneRegister(charID)
    console.log("Character with ID: " + charID + " was deleted.");
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
