const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {

  let containerCharacter = document.getElementById("container-character");

  document.getElementById("fetch-all").onclick = function() {

    charactersAPI.getFullList().then(data => {
      containerCharacter.innerHTML = "";

      data.forEach(e => {
        containerCharacter.innerHTML += `<div class="character-info col-sm-4">
        <div class="id">Character Id: ${e.id}</div>
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

    charactersAPI.getOneRegister(id).then(data => {
      //console.log(data);
      containerCharacter.innerHTML = "";
      containerCharacter.innerHTML += `<div class="character-info col-sm-4">
        <div class="id">Character Id: ${data.id}</div>
        <div class="name">Name: ${data.name}</div>
        <div class="occupation">Occupation: ${data.occupation}</div>
        <div class="cartoon">Cartoon: ${data.cartoon}</div>
        <div class="weapon">Weapon: ${data.weapon}</div>
      </div>`;
    });

  };

  document.getElementById("delete-one").onclick = function() {
    let input = document.getElementById("delete-one-input");
    let id = input.value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    let id = document.getElementById("edit-char-id").value;
    let name = document.getElementById("edit-char-name").value;
    let occupation = document.getElementById("edit-char-occupation").value;
    let weapon = document.getElementById("edit-char-weapon").value;
    let cartoon = document.querySelector("#edit-char-cartoon").checked;
    let character = { id, name, occupation, weapon, cartoon };
    charactersAPI.updateOneRegister(id, character);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementById("new-char-name").value;
    let occupation = document.getElementById("new-char-occupation").value;
    let weapon = document.getElementById("new-char-weapon").value;
    let cartoon = document.querySelector("#new-char-cartoon").checked;
    let character = { name, occupation, weapon, cartoon };
    charactersAPI.createOneRegister(character);
  };
});
