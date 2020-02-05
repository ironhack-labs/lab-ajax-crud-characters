import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler('http://localhost:8000');
const results = document.querySelector('.characters-container');

function displayFullList(characters){
  characters.forEach(character => {
    results.innerHTML += `<div class="character-info">
      <div class="name">Name : ${character.name}</div>
      <div class="occupation">Occupation : ${character.occupation}</div>
      <div class="weapon">Weapon : ${character.weapon}</div>
      <div class="cartoon">Cartoon : ${character.cartoon}</div>
    </div>`
  });
};

function displayOne(character){
  results.innerHTML = `<div class="character-info">
    <div class="name">Name : ${character.name}</div>
    <div class="occupation">Occupation : ${character.occupation}</div>
    <div class="weapon">Weapon : ${character.weapon}</div>
    <div class="cartoon">Cartoon : ${character.cartoon}</div>
  </div>`;
};

function createOne(result){
  (result === "success") && (document.getElementById('send-data').classList += "green-background");
  (result === "error") && (document.getElementById('send-data').classList += "red-background");
};

function deleteOne(result){
  (result === "success") && (document.getElementById('delete-one').classList += "green-background");
  (result === "error") && (document.getElementById('delete-one').classList += "red-background");
};

function updateOne(result){
  (result === "success") && (document.getElementById('update-data').classList += "green-background");
  (result === "error") && (document.getElementById('update-data').classList += "red-background");
};




window.addEventListener('load', () => {
  event.preventDefault();
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((res) => displayFullList(res.data))
    .catch((err) => err);
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const inputFetchOne = document.querySelector("input[name='character-id']")
    charactersAPI.getOneRegister(inputFetchOne.value)
    .then((res) => displayOne(res.data))
    .catch((err) => err);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const character = {
      name: document.querySelector("#new-character-form input[name='name']").value,
      occupation: document.querySelector("#new-character-form input[name='occupation']").value,
      weapon: document.querySelector("#new-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#new-character-form input[name='cartoon']").checked
    };
    charactersAPI.createOneRegister(character)
    .then((res) => createOne("success"))
    .catch((err) => createOne("error"));
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const inputDeleteOne = document.querySelector("input[name='character-id-delete']")
    charactersAPI.deleteOneRegister(inputDeleteOne.value)
    .then((res) => deleteOne("success"))
    .catch((err) => deleteOne("error"));
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.querySelector("#edit-character-form input[name='chr-id']").value;
    const character = {
      name: document.querySelector("#edit-character-form input[name='name']").value,
      occupation: document.querySelector("#edit-character-form input[name='occupation']").value,
      weapon: document.querySelector("#edit-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#edit-character-form input[name='cartoon']").checked
    };
    charactersAPI.updateOneRegister(character, id)
    .then((res) => updateOne("success"))
    .catch((err) => updateOne("error"));
  });
});
