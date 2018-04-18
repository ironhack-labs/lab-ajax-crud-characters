$(document).ready(() => {
  const charactersAPI = new APIHandler("http://localhost:8000");
  document.getElementById("fetch-all").onclick = function() {
    let container = document.getElementById("characters");
    container.innerHTML = "";
    charactersAPI.getFullList().then(data => {
      data.forEach(e => {
        container.innerHTML += `<div class="character-info col-sm-4">
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let container = document.getElementById("characters");
    let input = document.getElementById("fetch-one-input");
    let id = input.value;
    container.innerHTML = "";
    charactersAPI.getOneRegister(id).then(e => {
      container.innerHTML += `<div class="character-info col-sm-4">
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let button = document.getElementById("delete-one");
    let id = document.getElementById("delete-one-input").value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        button.setAttribute("class", "success");
      })
      .catch(() => {
        button.setAttribute("class", "error");
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    let button = document.getElementById("edit-one");
    let id = document.getElementById("editCharId").value;
    let name = document.getElementById("editCharName").value;
    let occupation = document.getElementById("editCharOccupation").value;
    let weapon = document.getElementById("editCharWeapon").value;
    let cartoon = document.querySelector("#editCharCartoon").checked;
    let character = { id, name, occupation, weapon, cartoon };
    charactersAPI
      .updateOneRegister(character)
      .then(() => {
        button.setAttribute("class", "success");
      })
      .catch(() => {
        button.setAttribute("class", "error");
      });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let button = document.getElementById("new-one");
    let name = document.getElementById("newCharName").value;
    let occupation = document.getElementById("newCharOccupation").value;
    let weapon = document.getElementById("newCharWeapon").value;
    let cartoon = document.querySelector("#newCharCartoon").checked;
    let character = { name, occupation, weapon, cartoon };
    charactersAPI
      .createOneRegister(character)
      .then(() => {
        button.setAttribute("class", "success");
      })
      .catch(() => {
        button.setAttribute("class", "error");
      });
  };
});
