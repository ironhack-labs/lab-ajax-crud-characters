const charactersAPI = new APIHandler("http://localhost:8000");
var characterContainer = document.querySelector(".characters-container");

function displayCharacters(chars) {
  chars.forEach(element => {
    var newCharacter = document.createElement("div");

    var tpl = `<div>
  <div class="name">${element.name}</div>
  <div class="occupation">${element.occupation}</div>
  <div class="cartoon">${element.cartoon}</div>
  <div class="weapon">${element.weapon}</div>
  </div>`;

    newCharacter.innerHTML = tpl;
    characterContainer.appendChild(newCharacter);
  });
}

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList("/character")
      .then(dbres => displayCharacters(dbres.data))
      .catch(dbErr => console.log(dbErr));
  };
});

function displayOnecharacter(char) {
  const showOnecharacter = document.createElement("div");
  const tpl = `<div>
    <div class="name">${char.name}</div>
    <div class="occupation">${char.occupation}</div>
    <div class="cartoon">${char.cartoon}</div>
    <div class="weapon">${char.weapon}</div>
    </div>`;
  showOnecharacter.innerHTML = tpl;
  characterContainer.appendChild(showOnecharacter);
}

document.getElementById("fetch-one").onclick = function() {
  const id = document.querySelector("[name=character-id]").value;

  charactersAPI
    .getOneRegister(id)
    .then(dbres => displayOnecharacter(dbres.data))
    .catch(dbErr => console.log(dbErr));
};

document.getElementById("delete-one").onclick = function() {
  const id = document.querySelector("[name=character-id-delete]").value;

  charactersAPI.deleteOneRegister(id).then(dbres => console.log(dbres));
};

document.getElementById("edit-character-form").onsubmit = function(evt) {
  evt.preventDefault();
  const id = document.querySelector("#edit-character-form [name=chr-id]").value;
  console.log(id);
  const name = document.querySelector("#edit-character-form [name=name]").value;
  const occupation = document.querySelector(
    "#edit-character-form [name=occupation]"
  ).value;
  const weapon = document.querySelector("#edit-character-form [name=weapon]")
    .value;
  const cartoon = document.querySelector("#edit-character-form [name=cartoon]")
    .checked;

  let characterObj = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon
  };
  charactersAPI
    .updateOneRegister(id, characterObj)
    .then(dbres => console.log("yeaaaaaaaaaaaa"))
    .catch(Error => console.log(dbErr));
};

document.getElementById("new-character-form").onsubmit = function(evt) {
  evt.preventDefault();
  const name = document.querySelector("#new-character-form [name=name]").value;
  const occupation = document.querySelector(
    "#new-character-form [name=occupation]"
  ).value;
  const weapon = document.querySelector("#new-character-form [name=weapon]")
    .value;
  const cartoon = document.querySelector("#new-character-form [name=cartoon]")
    .checked;

  let characterObj = {
    name: name,
    occupation: occupation,
    weapon: weapon,
    cartoon: cartoon
  };
  charactersAPI
    .createOneRegister(characterObj)
    .then(dbres => console.log("yeaaaaaaaaaaaa"))
    .catch(Error => console.log(dbErr));
};
