const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(payload => {
      let html = "";
      payload.forEach(element => {
        html += `<div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
        </div>`;
      });
      document.querySelector(".characters-container").innerHTML = html;
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister(
      document.querySelector("input[name=character-id]").value
    );
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister(
      document.querySelector("input[name=character-id-delete]").value
    );
  };

  document.querySelector("#edit-character-form #send-data").onclick = e => {
    e.preventDefault();
    const id = +document.querySelector(
      "#edit-character-form  input[name=chr-id]"
    ).value;
    const myNewCharacter = {
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
    charactersAPI.updateOneRegister(id, myNewCharacter);
  };

  document.querySelector("#new-character-form #send-data").onclick = e => {
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
