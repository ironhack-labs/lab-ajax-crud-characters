const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    const theId = document.getElementById("input-fetch").value;
    charactersAPI.getOneRegister(theId);
  };

  document.getElementById("delete-one").onclick = function() {
    const theId = document.getElementById("id-delete").value;
    charactersAPI.deleteOneRegister(theId);  
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const theId = document.getElementById("theCharId").value;
    charactersAPI.updateOneRegister(theId);

  };

  document.getElementById("new-character-form").onsubmit = function() {
    charactersAPI.createOneRegister()
  };
});
