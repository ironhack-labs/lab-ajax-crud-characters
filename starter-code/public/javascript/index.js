const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  // Fetch All Character
  document.getElementById("fetch-all").onclick = async function() {
    let data = await charactersAPI.getFullList();
    console.log(data);
    document.querySelector(".characters-container").innerHTML = JSON.stringify(
      data
    );
  };

  // Fetch a specific Character
  document.getElementById("fetch-one").onclick = function() {
    let id = document.querySelector(
      'body > section:nth-child(1) > section > div:nth-child(2) > input[type="text"]'
    ).value;
    if (id) charactersAPI.getOneRegister(id);
  };

  // Delete Character
  document.getElementById("delete-one").onclick = function() {
    let id = document.querySelector(
      'body > section:nth-child(1) > section > div.operation.delete > input[type="text"]'
    ).value;
    charactersAPI.deleteOneRegister(id);
  };

  // Edit Character
  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let id = document.querySelector(
      '#edit-character-form > div:nth-child(1) > input[type="text"]'
    ).value;
    console.log(id);
    let name = document.querySelector(
      '#edit-character-form > div:nth-child(2) > input[type="text"]'
    ).value;
    let occupation = document.querySelector(
      '#edit-character-form > div:nth-child(3) > input[type="text"]'
    ).value;
    let weapon = document.querySelector(
      '#edit-character-form > div:nth-child(4) > input[type="text"]'
    ).value;
    let cartoon = document.querySelector(
      '#edit-character-form > div:nth-child(5) > input[type="checkbox"]'
    ).checked;
    let characterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };
    if (id) charactersAPI.updateOneRegister(id, characterInfo);
  };

  // New Character
  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();

    const characterInfo = {
      name: document.querySelector(
        '#new-character-form > div:nth-child(1) > input[type="text"]'
      ).value,
      occupation: document.querySelector(
        '#new-character-form > div:nth-child(2) > input[type="text"]'
      ).value,
      weapon: document.querySelector(
        '#new-character-form > div:nth-child(3) > input[type="text"]'
      ).value,
      cartoon: document.querySelector(
        '#new-character-form > div:nth-child(4) > input[type="checkbox"]'
      ).checked
    };
    charactersAPI.createOneRegister(characterInfo);
  };
});
