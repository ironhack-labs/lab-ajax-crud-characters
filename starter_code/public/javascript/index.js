const charactersAPI = new APIHandler(
  "https://ih-crud-api.herokuapp.com/characters"
);

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(elements => console.log(elements))
      .catch(err => console.log(err));
  };

  document.getElementById("fetch-one").onclick = function() {
    let idChosen = document.querySelector("input[name='character-id']").value;
    charactersAPI
      .getOneRegister(idChosen)
      .then(el => console.log(el))
      .catch(err => console.log(err));
  };

  document.getElementById("delete-one").onclick = function() {
    let deleteIdChosen = document.querySelector(
      "input[name='character-id-delete']"
    ).value;
    charactersAPI
      .deleteOneRegister(deleteIdChosen)
      .then(el => console.log(el))
      .catch(err => console.log(err));
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let characterIdEdited = document.querySelector("input[name='chr-id']")
      .value;
    let characterNameEdited = document.querySelector("input[name='name']")
      .value;
    let characterOccupationEdited = document.querySelector(
      "input[name='occupation']"
    ).value;
    let characterWeaponEdited = document.querySelector("input[name='weapon']")
      .value;
    let characterCartoonEdited = document.querySelector(
      "input[name='cartoon']"
    ).checked;
    const editedCharacter = {
      chr-id: characterIdEdited,
      name: characterNameEdited,
      occupation: characterOccupationEdited,
      weapon: characterWeaponEdited,
      cartoon: characterCartoonEdited
    };
    charactersAPI
      .updateOneRegister(editedCharacter)
      .then(elements => console.log(elements))
      .catch(err => console.log(err));
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let characterNameCreated = document.querySelector("input[name='name']")
      .value;
    let characterOccupationCreated = document.querySelector(
      "input[name='occupation']"
    ).value;
    let characterWeaponCreated = document.querySelector("input[name='weapon']")
      .value;
    let characterCartoonCreated = document.querySelector(
      "input[name='cartoon']"
    ).checked;
    const newCharacter = {
      name: characterNameCreated,
      occupation: characterOccupationCreated,
      weapon: characterWeaponCreated,
      cartoon: characterCartoonCreated
    };
    charactersAPI
      .createOneRegister(newCharacter)
      .then(elements => console.log(elements))
      .catch(err => console.log(err));
  };
});
