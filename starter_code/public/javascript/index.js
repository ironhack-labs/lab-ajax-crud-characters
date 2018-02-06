const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister(id);
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    charactersAPI.updateOneRegister(id);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    charactersAPI.createOneRegister();
  };
});
