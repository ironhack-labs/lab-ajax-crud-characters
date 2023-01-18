/* const { default: axios } = require("axios");
 */
const charactersAPI = new APIHandler("http://localhost:8000");
const charactersBlock = document.getElementById("allCharacters");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getAllCharacters()
        .then((results) => {
          const characters = results.data;
          charactersBlock.innerHTML = "";
          for (let i = 0; i < characters.length; i++) {
            charactersBlock.innerHTML += `<div class="character-info">
            <div class="name">Name: ${characters[i].name}</div>
            <div class="id">id: ${characters[i].id}</div>
            <div class="occupation">Occupation: ${characters[i].occupation}</div>
            <div class="cartoon">Cartoon?: ${characters[i].cartoon}</div>
            <div class="weapon">Weapon: ${characters[i].weapon}</div>
          </div>`;
          }
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterID = document.getElementById("character-id").value;
      charactersAPI
        .getOneCharacter(characterID)
        .then((result) => {
          const character = result.data;
          charactersBlock.innerHTML = "";
          charactersBlock.innerHTML += `<div class="character-info">
        <div class="name">Name: ${character.name}</div>
        <div class="id">id: ${character.id}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`;
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterID = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteCharacter(characterID)
        .catch((err) => console.log(err));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const characterID = document.getElementById("edit-character-id").value;
      const existingCharacter = {}
      charactersAPI.getOneCharacter(characterID)  
        .then(result => {
          existingCharacter = result.data
        })
      const editCharacter = {
        name: document.getElementById("edit-character-name").value,
        occupation: document.getElementById("edit-character-occupation").value,
        weapon: document.getElementById("edit-character-weapon").value,
        cartoon: document.getElementById("edit-character-cartoon").value
      }
      //delete this part
      if(editCharacter.name === "" || editCharacter.name === null || editCharacter.name === undefined) {
        editCharacter.name = existingCharacter.name
      }
      charactersAPI.editCharacter(characterID, editCharacter)
    });

  document
    .getElementById("send-data")
    .addEventListener("click", function (event) {
      const newCharacter = {
        name: document.getElementById("new-character-name").value,
        occupation: document.getElementById("new-character-occupation").value,
        weapon: document.getElementById("new-character-weapon").value,
        cartoon: document.getElementById("new-character-cartoon").value
      }
    
      charactersAPI.createCharacter(newCharacter) 
    });
});
// new push