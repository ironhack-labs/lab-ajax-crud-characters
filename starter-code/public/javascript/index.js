const charactersAPI = new APIHandler("http://localhost:8000/");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(persons => {
      let newPerson = "";
      persons.data.forEach(person => {
        newPerson += `<div class="character-info">
        <div class="name">${person.name}</div>
        <div class="occupation">${person.occupation}</div>
        <div class="cartoon">${person.cartoon}</div>
        <div class="weapon">${person.weapon}</div>
        </div>`;
      });
      document.querySelector(".characters-container").innerHTML = newPerson;
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    const selectedId = +document.querySelector("input[name=character-id]")
      .value;

    charactersAPI.getOneRegister(selectedId);
  };

  document.getElementById("delete-one").onclick = function() {
    const selectedId = +document.querySelector(
      "input[name=character-id-delete]"
    ).value;

    charactersAPI.deleteOneRegister(selectedId);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    e.preventDefault();

    const controlID = +document.querySelector(
      "#edit-character-form  input[name=chr-id]"
    ).value;

    const editCharacter = {
      name: document.querySelector("#edit-character-form input[name=name]")
        .value,
      occupation: document.querySelector(
        "#edit-character-form  input[name=occupation]"
      ).value,
      weapon: document.querySelector("#edit-character-form  input[name=weapon]")
        .value,
      cartoon: document.querySelector(
        "#edit-character-form  input[name=cartoon]"
      ).checked
    };
    charactersAPI.updateOneRegister(controlID, editCharacter);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    const myNewCharacter = {
      name: document.querySelector("#new-character-form input[name=name]")
        .value,
      occupation: document.querySelector(
        "#new-character-form  input[name=occupation]"
      ).value,
      weapon: document.querySelector("#new-character-form  input[name=weapon]")
        .value,
      cartoon: document.querySelector(
        "#new-character-form  input[name=cartoon]"
      ).checked
    };
    charactersAPI.createOneRegister(myNewCharacter);
  };
});
