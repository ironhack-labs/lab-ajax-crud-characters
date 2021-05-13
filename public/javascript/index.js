const charactersAPI = new APIHandler('http://localhost:8000');
console.log("---starting point");
console.log(charactersAPI);

const characterWrapper = document.querySelector(".characters-container");
const characterId = document.getElementById("character-id");

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
        <div class="name">Character Name: ${apiResult.data.name}</div>
        <div class="occupation">Character Occupation: ${apiResult.data.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${apiResult.data.cartoon}</div>
        <div class="weapon">Character Weapon: ${apiResult.data.weapon}</div>
      </div>`
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
