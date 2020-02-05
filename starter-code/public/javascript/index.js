import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000");

var containerCharacters = document.querySelector(".characters-container");

function showCharacters(data) {
  console.log(data);
  for (var character in data) {
  var characterEl = document.createElement("div");
  characterEl.classList.add("character-info");
  characterEl.innerHTML += `<div class="name">Character Name: ${data[character].name}</div>
    <div class="occupation">Occupation: ${data[character].occupation}</div>
    <div class="cartoon">is Cartoon? ${data[character].cartoon}</div>
    <div class="weapon">Weapon: ${data[character].weapon}</div>`;
    containerCharacters.appendChild(characterEl);
  }
}

function showCharacter(data) {
  console.log(data);
  var characterEl = document.createElement("div");
  characterEl.classList.add("character-info");
  characterEl.innerHTML += `<div class="name">Character Name: ${data.name}</div>
    <div class="occupation">Occupation: ${data.occupation}</div>
    <div class="cartoon">is Cartoon? ${data.cartoon}</div>
    <div class="weapon">Weapon: ${data.weapon}</div>`;
    containerCharacters.appendChild(characterEl);
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(res => showCharacters(res.data))
    .catch (err => console.log(err));
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    var characterId = document.getElementById("input-id").value;
    charactersAPI
    .getOneRegister(characterId)
    .then(res => showCharacter(res.data))
    .catch (err => console.log(err));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    var characterId = document.getElementById("delete-input").value;
    charactersAPI
    .deleteOneRegister(characterId)
    .then(res => console.log(res.data))
    .catch (err => console.log(err));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var characterId = document.getElementById("edit-input").value;
    var btnUpdate = document.getElementById("edit-data");
    btnUpdate.style.backgroundColor ="green";
    var updCharacter = {
      "name": document.getElementById("upd-name").value,
      "occupation": document.getElementById("upd-occupation").value,
      "weapon": document.getElementById("upd-weapon").value,
      "cartoon": document.getElementById("upd-cartoon").value
    }

    charactersAPI
    .updateOneRegister(characterId, updCharacter)
    .then(res => console.log(res.data))
    .catch (err => {
      console.log(err)
      btnUpdate.style.backgroundColor = "red";
    });
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var newCharacter = {
      "name": document.getElementById("new-name").value,
      "occupation": document.getElementById("new-occupation").value,
      "weapon": document.getElementById("new-weapon").value,
      "cartoon": document.getElementById("new-cartoon").value
    }

    charactersAPI
    .createOneRegister(newCharacter)
    .then(res => console.log(res.data))
    .catch (err => console.log(err));
  });
});
