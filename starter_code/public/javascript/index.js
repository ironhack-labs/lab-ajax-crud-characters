const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  //#region find elements
  let fetchIdInput = $("#character-id-fetch");
  let deleteIdInput = $("#character-id-delete");
  let characterCardContainer = $("#characters-container");
  let newCharForm = $("#new-character-form");
  let editCharForm = $("#edit-character-form");

  //#endregion

  function createAndAppendCharCard(character) {
    characterCardContainer.append(getHTMLForCharacterInfoCard(character));
  }

  //#region fetch all
  document.getElementById("fetch-all").onclick = function() {
    console.log("full list!");
    charactersAPI.getFullList().then(characters => {
      characterCardContainer.empty();
      characters.forEach(character => {
        console.log("CHARACTER", character);
        createAndAppendCharCard(character);
      });
      console.log("FETCH ALL ON CLICK", characters);
    });
  };
  //#endregion

  //#region fetch and delete one
  $("#fetch-one").click(function() {
    charactersAPI.getOneRegister(fetchIdInput.val()).then(character => {
      characterCardContainer.empty();
      createAndAppendCharCard(character);
    });
  });

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault();
    charactersAPI.deleteOneRegister(deleteIdInput.val());
  };
  //#endregion

  //#region edit and new character

  // Create an object with data to submit
  const characterInfo = {
    name: $(this).find('input[name="name"]').val,
    occupation: $(this).find('input[name="occupation"]').val,
    weapon: $(this).find('input[name="weapon"]').val
  };

  editCharForm.on("submit", function(e) {
    e.preventDefault();
    console.log("SUBMIT EDIT FORM!");
    let id = $(this)
      .find('input[name="id"]')
      .val();
    console.log("DEBUG ID", id);
    let newObj = clean(getObjectFromHTMLInput($(this)));
    charactersAPI.updateOneRegister(id, newObj);
  });

  newCharForm.on("submit", function(e) {
    e.preventDefault();
    charactersAPI.createOneRegister(getObjectFromHTMLInput($(this)));

    console.log("NEW CHAR FORM");
  });

  //#endregion
});
