const charactersAPI = new APIHandler("http://localhost:8000");
let inputs = document.querySelectorAll("input");
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    let charContainer = document.querySelector(".characters-container");
    charactersAPI.getFullList().then(character => {
      console.log(character);
      charContainer.innerHTML = "";
      for (let i = 0; i < character.length; i++) {
        let minion = `<div class="character-info">
  <div class="name">${character[i].name}</div>
  <div class="occupation">${character[i].occupation}</div>
  <div class="cartoon">${character[i].cartoon}</div>
  <div class="weapon">${character[i].weapon}</div>
</div>`;
        charContainer.innerHTML += minion;
      }
    });
  };
  document.getElementById("fetch-one").onclick = function() {
    let charContainer = document.querySelector(".characters-container");
    let id = inputs[0].value;
    if (id.length > 0) {
      charactersAPI.getOneRegister(id).then(character => {
        charContainer.innerHTML = "";
        let minion = `<div class="character-info">
  <div class="name">${character.name}</div>
  <div class="occupation">${character.occupation}</div>
  <div class="cartoon">${character.cartoon}</div>
  <div class="weapon">${character.weapon}</div>
</div>`;
        charContainer.innerHTML = minion;
      });
    }
  };
  document.getElementById("delete-one").onclick = function() {
    let deleteOne = document.getElementById("delete-one");
    let id = inputs[1].value;
    if (id.length > 0) {
      charactersAPI
        .deleteOneRegister(id)
        .then(() => {
          deleteOne.classList.remove("background-red");
          deleteOne.classList.add("background-green");
        })
        .catch(() => {
          deleteOne.classList.remove("background-green");
          deleteOne.classList.add("background-red");
        });
    }
  };
  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let idEdit = inputs[6].value;
    let updateCharacter = {
      name: inputs[7].value,
      occupation: inputs[8].value,
      weapon: inputs[9].value,
      cartoon: inputs[10].checked
    };
    charactersAPI.updateOneRegister(idEdit, updateCharacter);
  };
  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let newCharacter = {
      name: inputs[2].value,
      occupation: inputs[3].value,
      weapon: inputs[4].value,
      cartoon: inputs[5].checked
    };
    charactersAPI.createOneRegister(newCharacter);
  };
});
