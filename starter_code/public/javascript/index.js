const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    var id = document.getElementById(`character-id`).value;
    charactersAPI.getOneRegister(id);
  };

  document.getElementById("delete-one").onclick = function() {
    var id = document.getElementById(`character-id-delete`).value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();

    var id = document.getElementById(`chr-id`).value;

    const characterInfo = {
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      debt: document.getElementById(`debt`).checked
    };

    charactersAPI.updateOneRegister(id, characterInfo);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();

    const characterInfo = {
      name: document.getElementById("the-name-input").value,
      occupation: document.getElementById("the-occupation-input").value,
      weapon: document.getElementById("the-weapon-input").value,
      debt: document.getElementById(`the-debt-input`).checked
    };
    charactersAPI.createOneRegister(characterInfo);
  };
});
