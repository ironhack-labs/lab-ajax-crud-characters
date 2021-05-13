const charactersAPI = new APIHandler('http://localhost:8000');
console.log("---starting point");
console.log(charactersAPI);

const characterWrapper = document.querySelector(".characters-container");
const characterId = document.getElementById("character-id");
const characterToDelete = document.getElementById("character-to-delete");
const deleteBtn = document.getElementById("delete-one");
const newCharacterForm = document.getElementById("new-character-form");
const newCharacterInputs = newCharacterForm.querySelectorAll("input");

window.addEventListener('load', () => {
  document
  .getElementById('fetch-all')
  .addEventListener('click', async (event) => {
    const apiResult = await charactersAPI.getFullList();
    const collection = apiResult.data;
    characterWrapper.innerHTML = "";
    collection.forEach((item) => {
      characterWrapper.innerHTML +=
      `<div class="character-info">
        <div class="id">Character ID: ${item.id}</div>
        <div class="name">Character Name: ${item.name}</div>
        <div class="occupation">Character Occupation: ${item.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${item.cartoon}</div>
        <div class="weapon">Character Weapon: ${item.weapon}</div>
      </div>`
    })
  });

  document
  .getElementById('fetch-one')
  .addEventListener('click', async (event) => {
    const id = characterId.value
    const apiResult = await charactersAPI.getOneRegister(id);
    characterWrapper.innerHTML = 
    `<div class="character-info">
        <div class="id">Character ID: ${apiResult.data.id}</div>
        <div class="name">Character Name: ${apiResult.data.name}</div>
        <div class="occupation">Character Occupation: ${apiResult.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${apiResult.data.cartoon}</div>
        <div class="weapon">Character Weapon: ${apiResult.data.weapon}</div>
      </div>`
  });

  document
  .getElementById('delete-one')
  .addEventListener('click', async (event) => {
    const id = characterToDelete.value
    console.log(id);
    try {
      await charactersAPI.deleteOneRegister(id);
      // If the character is successfully removed, change the background color of the button to green.
      deleteBtn.style.backgroundColor = "green";
    } catch (err) {
      console.error(err);
      // If something went wrong, change the background color of the button to red.
      deleteBtn.style.backgroundColor = "red";
    }
  });

  document
  .getElementById('edit-character-form')
  .addEventListener('submit', async (event) => {

  });

  document
  .getElementById('new-character-form')
  .addEventListener('submit', async (event) => {
    const payload = {};
    newCharacterInputs.forEach((input) => (payload[input.name] = input.value || false )); // Still need to work on checkbox since this value is always true
    console.log(payload);
    if (payload.cartoon === "on") {
      payload.cartoon = true;
    } 
    try {
      await charactersAPI.createOneRegister(payload);

    } catch (err) {
      console.error(err);
    }
  });
});
