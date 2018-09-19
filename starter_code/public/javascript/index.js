const charactersAPI = new APIHandler("http://localhost:8000");

const printCharacter = char => {
  let charDiv = `<div class="character-info">
  <div class="id">ID: <span>${char._id}</span></div>
    <div class="name">Name: <span>${char.name}</span></div>
    <div class="occupation">Occupation: <span>${char.occupation}</span></div>
    <div class="weapon">Weapon: <span>${char.weapon}</span></div>
    <div class="cartoon">Cartoon: <span>${char.cartoon}</span></div>
  </div>`;
  document.getElementById("characters-container").insertAdjacentHTML('afterend', charDiv);
};

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(result => {
      result.forEach(each => {
        console.log(each.name);
        printCharacter(each);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let CharId = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(CharId);
  };

  document.getElementById("delete-one").onclick = function() {
    let CharId = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(CharId);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementById("newName").value;
    let occupation = document.getElementById("newOccupation").value;
    let weapon = document.getElementById("newWeapon").value;
    let cartoon = Boolean(document.getElementById("newCartoon").value);
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };

  document.getElementById("edit-character-form").onsubmit = function(event) {
    event.preventDefault();

    let CharId = document.getElementById("editId").value;
    let name = document.getElementById("editName").value;
    let occupation = document.getElementById("editOccupation").value;
    let weapon = document.getElementById("editWeapon").value;
    let cartoon = Boolean(document.getElementById("editCartoon").value);

    charactersAPI.updateOneRegister(CharId, name, occupation, weapon, cartoon);
  };
});
