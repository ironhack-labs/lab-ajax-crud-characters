const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    let containerCharacter = document.getElementById("container-character");
    charactersAPI.getFullList().then(data => {
      containerCharacter.innerHTML = "";
      data.forEach(e => {
        containerCharacter.innerHTML += `<div class="character-info col-sm-4">
      <div class="name">Name: ${e.name}</div>
      <div class="occupation">Occupation: ${e.occupation}</div>
      <div class="cartoon">Cartoon: ${e.cartoon}</div>
      <div class="weapon">Weapon: ${e.weapon}</div>
    </div>`;
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let input = document.getElementById("fetch-one-input");
    let id = input.value;
    let containerCharacter = document.getElementById("container-character");

    charactersAPI.getOneRegister(id).then(data => {
      containerCharacter.innerHTML = "";
      containerCharacter.innerHTML += `<div class="character-info col-sm-4">
      <div class="name">Name: ${data.name}</div>
      <div class="occupation">Occupation: ${data.occupation}</div>
      <div class="cartoon">Cartoon: ${data.cartoon}</div>
      <div class="weapon">Weapon: ${data.weapon}</div>
    </div>`;
    });
  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementById("newCharacterName").value;
    let occupation = document.getElementById("newCharacterOccupation").value;
    let weapon = document.getElementById("newCharacterWeapon").value;
    let cartoon = document.querySelector("#newIsCartoon").checked;
    let character = { name, occupation, weapon, cartoon };
    debugger;
    charactersAPI.createOneRegister(character);
  };
});
 
