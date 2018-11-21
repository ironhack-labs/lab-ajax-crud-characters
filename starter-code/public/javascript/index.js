const charactersAPI = new APIHandler("http://localhost:8000");
let containerCharacters = document.querySelector(".characters-container");

$(document).ready(() => {

  document.getElementById("fetch-all").onclick = function() {
    drawAll();
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("search-id").value;
    charactersAPI.getOneRegister(id).then(jsonCharacteres => {
      containerCharacters.innerHTML = ` 
        <div class="character-info">
        <div>ID: ${jsonCharacteres.data.id}</div>
        <div class="name">Character Name: ${jsonCharacteres.data.name}</div>
        <div class="occupation">Character Occupation: ${
          jsonCharacteres.data.occupation
        }</div>
      <div class="cartoon">is a cartoon? ${jsonCharacteres.data.cartoon}</div>
      <div class="weapon">Character Weapon: ${jsonCharacteres.data.weapon}</div>
    </div>`;
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("delete-id").value;
    charactersAPI.deleteOneRegister(id).then(() => {
      drawAll();
    });
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let id = document.getElementById("editId").value;
    let name = document.getElementById("editName").value;
    let occupation = document.getElementById("editOccupation").value;
    let weapon = document.getElementById("editWeapon").value;
    let cartoon = document.getElementById("editCartoon").value;
    if (cartoon.checked) {
      cartoon = true;
    } else {
      cartoon = false;
    }
    let myCharacter = {
      name: name,
      occupation: occupation,
      cartoon: cartoon,
      weapon: weapon
    };
    console.log(myCharacter)
    charactersAPI.updateOneRegister( id, myCharacter )
    .then(()=>{
      drawAll()
    });
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let name = document.getElementById("createName").value;
    let occupation = document.getElementById("createOccupation").value;
    let weapon = document.getElementById("createWeapon").value;
    let cartoon = document.getElementById("createCartoon").value;
    if (cartoon.checked) {
      cartoon = true;
    } else {
      cartoon = false;
    }
    let myCharacter = {
      name: name,
      occupation: occupation,
      cartoon: cartoon,
      weapon: weapon
    };
  
    charactersAPI.createOneRegister(myCharacter)
    .then(()=>{
      drawAll()
    });
  };

  function drawAll() {
    charactersAPI.getFullList().then(jsonCharacteres => {
      containerCharacters.innerHTML = ``;
      jsonCharacteres.data.forEach(character => {
        containerCharacters.innerHTML += `  
        <div class="character-info">
        <div>ID: ${character.id}</div>
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${
          character.occupation
        }</div>
        <div class="cartoon">is a cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`;
      });
    });
  }
});
