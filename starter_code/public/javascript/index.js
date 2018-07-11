const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList()
    .then(data => console.log(data));
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = $("#character-id").val();
    charactersAPI.getOneRegister(id)
    .then(data => console.log(data));
  };

  document.getElementById("delete-one").onclick = function() {
    let id = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(id)
    .then(data => console.log("Character deleted"))
  };

  document.getElementById("edit-character-form").onsubmit = function() {

  };

  document.getElementById("new-character-form").onsubmit = function() {

  };
});
