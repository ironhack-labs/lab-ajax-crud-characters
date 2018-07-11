const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com/characters"
);

$(document).ready(() => {
  
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList()
    .then (data => {
      console.log(data.data);
    })
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.querySelector("input[name='character-id']").value;
    charactersAPI.getOneRegister(id)
    .then (data => {
      console.log(data.data);
    })
  };

  document.getElementById("delete-one").onclick = function () {
    let id = document.querySelector("input[name='character-id']").value;
    charactersAPI.deleteOneRegister(id)
      .then(data => {
        console.log("Character has been successfully deleted");
      })
      .catch(err => {
        console.error("")
      })
    };

  document.getElementById("edit-character-form").onsubmit = function() {
    charactersAPI.updateOneRegister();
  };

  document.getElementById("new-character-form").onsubmit = function() {
    charactersAPI.createOneRegister();
  };
});
