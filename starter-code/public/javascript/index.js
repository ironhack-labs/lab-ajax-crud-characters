import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler('http://localhost:8000');
const charInfos = document.querySelector(".characters-container");
const newCharBtn = document.querySelector("#new-character-form #send-data");
const editCharBtn = document.querySelector("#edit-character-form #send-data");


window.addEventListener('load', () => {
  //GET ALL
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then(dbRes => {
      // dbRes.data = array of characters
      charInfos.innerHTML = "";
      let charArray = dbRes.data;

      charArray.forEach(char => {
        charInfos.innerHTML += 
        `
        <div class="character-info">
          <div class="name">Id: ${char.id}</div>
          <div class="name">Name: ${char.name}</div>
          <div class="occupation">Occupation: ${char.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${char.cartoon}</div>
          <div class="weapon">Weapon: ${char.weapon}</div>
      </div>
      `;
      });
    })
    .catch(err => {
      console.log(err);
    });
    event.preventDefault();
  });


  //GET ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let charId = document.querySelector(`input[name = "character-id"]`).value;

    charInfos.innerHTML = "";
    charactersAPI
    .getOneRegister(charId)
    .then(dbRes => {
      charInfos.innerHTML = 
      `
      <div class="character-info">
        <div class="name">Id: ${dbRes.data.id}</div>
        <div class="name">Name: ${dbRes.data.name}</div>
        <div class="occupation">Occupation: ${dbRes.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${dbRes.data.cartoon}</div>
        <div class="weapon">Weapon: ${dbRes.data.weapon}</div>
      </div>
      `;
    })
    .catch(error => {
      console.log(error);
    })
  });


  //DELETE ONE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    let input = document.querySelector("input[name = character-id-delete]");
    let charId = input.value;

    charactersAPI
    .deleteOneRegister(charId)
    .then(() => {
      console.log("Character deleted.");
    })
    .catch(err => {
      console.error("Failed. You can not delete this character", err);
    })
    event.preventDefault()
  });



  //EDIT ONE
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const character = {
      id: document.querySelector(`#edit-character-form input[name="chr-id"]`).value,
      name: document.querySelector(`#edit-character-form input[name="name"]`).value,
      occupation: document.querySelector(`#edit-character-form input[name="occupation"]`).value,
      weapon: document.querySelector(`#edit-character-form input[name="weapon"]`).value,
      cartoon: document.querySelector(`#edit-character-form input[name="cartoon"]`).checked
    }

    charactersAPI
    .updateOneRegister(character)
    .then(() => {
      editCharBtn.classList.add("green-bg");
      console.log(`Character #${character.id} has been edited!`);
    })
    .catch(err => {
      editCharBtn.classList.add("red-bg");
      console.log(`Cannot edit character #${character.id}!`, err);
    })
    event.preventDefault()
  });


  //CREATE ONE
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const character = {
      name: document.querySelector(`#new-character-form input[name="name"]`).value,
      occupation: document.querySelector(`#new-character-form input[name="occupation"]`).value,
      weapon: document.querySelector(`#new-character-form input[name="weapon"]`).value,
      cartoon: document.querySelector(`#new-character-form input[name="cartoon"]`).checked
    }

    charactersAPI
    .createOneRegister(character)
    .then(() => {
      newCharBtn.classList.add("green-bg");
      console.log("New character ready to go!");
    })
    .catch(err => {
      newCharBtn.classList.add("red-bg");
      console.log("Creation failed.", err);
    })
    event.preventDefault()
  });
  
});
