$(document).ready(() => {
  const charactersAPI = new APIHandler("http://localhost:8000");
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      console.log(data);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let input = document.getElementById("fetch-one-input");
    let id = input.value;
    charactersAPI.getOneRegister(id).then(data => {
      console.log(data);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("delete-one-input").value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    let id = document.getElementById("editCharId").value;
    let name = document.getElementById("editCharName").value;
    let occupation = document.getElementById("editCharOccupation").value;
    let weapon = document.getElementById("editCharWeapon").value;
    let cartoon = document.querySelector("#editCharCartoon").checked;
    let character = { id, name, occupation, weapon, cartoon };
    charactersAPI.updateOneRegister(character);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let name = document.getElementById("newCharName").value;
    let occupation = document.getElementById("newCharOccupation").value;
    let weapon = document.getElementById("newCharWeapon").value;
    let cartoon = document.querySelector("#newCharCartoon").checked;
    let character = { name, occupation, weapon, cartoon };
    charactersAPI.createOneRegister(character);
  };
});
