const charactersAPI =  new APIHandler("http://localhost:8000/characters");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    id = document.querySelector('input[name = "character-id"]').value;
    charactersAPI.getOneRegister(id);
  };

  document.getElementById("delete-one").onclick = function() {
    deleteId = document.querySelector('input[name = "character-id-delete"]')
      .value;
    charactersAPI.deleteOneRegister(deleteId);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    id = document.querySelector('input[name = "chr-id"]').value;
    name = document.querySelector('input[name = "name-edit"]').value;
    occupation = document.querySelector('input[name = "occupation-edit"]').value;
    weapon = document.querySelector('input[name = "weapon-edit"]').value;
    cartoon = document.querySelector('input[name = "cartoon-edit"]').value
    
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    name = document.querySelector('input[name = "name"]').value;
    occupation = document.querySelector('input[name = "occupation"]').value;
    weapon = document.querySelector('input[name = "weapon"]').value;
    cartoon = document.querySelector('input[name = "cartoon"]').value
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  };
});
