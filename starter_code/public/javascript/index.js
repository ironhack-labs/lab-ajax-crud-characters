const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  //#region find elements
  let fetchIdInput = $("#character-id-fetch");
  let deleteIdInput = $("#character-id-delete");

  //#endregion

  //#region fetch all
  document.getElementById("fetch-all").onclick = function() {
    console.log("full list!");
    charactersAPI.getFullList().then(characters => {
      console.log("FETCH ALL ON CLICK", characters);
    });
  };
  //#endregion

  //#region fetch and delete one
  $("#fetch-one").click(function() {
    charactersAPI.getOneRegister(fetchIdInput.val());
  });

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault();
    charactersAPI.deleteOneRegister(deleteIdInput.val());
  };

  //#endregion

  document.getElementById("edit-character-form").onsubmit = function() {
    charactersAPI.updateOneRegister(1, { name: "Han" });
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    charactersAPI.createOneRegister({
      name: "Freja",
      occupation: "Smuggler",
      weapon: "Blaster Pistol",
      cartoon: true
    });
  };
});
