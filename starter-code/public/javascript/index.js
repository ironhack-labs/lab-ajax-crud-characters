import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000");

const target = document.querySelector(".characters-container");

function displayCharacter(chars) {
  function setTemplate(char) {
    const tpl = `
    <div class="character-info">
    <div class="name">${char.name}</div>
      <div class="occupation">${char.occupation}</div>
      <div class="cartoon">Is a Cartoon ? ${char.cartoon}</div>
      <div class="weapon">Weapon : ${char.weapon}</div>
      </div>`;
    return tpl;
  }

  target.innerHTML = "";

  chars.forEach(char => {
    console.log(char);
    target.innerHTML += setTemplate(char);
  });
}

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
    .getFullList("/characters")
    .then(res => displayCharacter(res.data))
    .catch(APIErr => console.error(APIErr));

  // charactersAPI.getFullList("/characters", function(res) {
  //   console.log("yata clbk", res);
  // });
};

document.getElementById("fetch-one").onclick = function(evt) {
  const id = document.getElementById("fetch_character_id").value;
  // console.log(evt);
  console.log(id);
  charactersAPI
    .getOneRegister(id)
    // .then(res => console.log(res))
    .then(res => displayCharacter([res.data]))
    .catch(APIErr => console.error(APIErr));
};

document.getElementById("delete-one").onclick = function() {
  console.log("delete one");
  const id = document.getElementById("delete_character_id").value;
  charactersAPI
    .deleteOneRegister(id)
    .then(res => console.log(res))
    .catch(APIErr => console.log(APIErr));
};

document.getElementById("edit-character-form").onsubmit = function(evt) {
  console.log("edit-character");
  evt.preventDefault();
  const newValues = {};
  const editForm = document.querySelector("#edit-character-form");
  const id = editForm.querySelector("[name=chr-id]").value;

  const name = editForm.querySelector("[name=name]").value;
  if (name) newValues.name = name;
  const occupation = editForm.querySelector("[name=occupation]").value;
  if (occupation) newValues.occupation = occupation;
  const weapon = editForm.querySelector("[name=weapon]").value;
  if (weapon) newValues.weapon = weapon;
  const cartoon = editForm.querySelector("[name=cartoon]").checked;
  if (cartoon) newValues.cartoon = cartoon;
  console.log({ id, name, occupation, weapon, cartoon });
  console.log(newValues);
  charactersAPI
    .updateOneRegister(id, newValues)
    .then(dbRes => displayCharacter([dbRes.data]))
    .catch(dbErr => console.log(dbErr));
};

document.getElementById("new-character-form").onsubmit = function(evt) {
  console.log("new character");
  evt.preventDefault(); // empeche le refresh de la page (sur le submit du form)
  const name = document.querySelector('#new-character-form [name="name"]')
    .value;
  const occupation = document.querySelector(
    '#new-character-form [name="occupation"]'
  ).value;
  const weapon = document.querySelector('#new-character-form [name="weapon"]')
    .value;
  const cartoon = document.querySelector('#new-character-form [name="cartoon"]')
    .checked;

  // const newChar = {
  //   name: name,
  //   occupation: occupation,
  //   weapon: weapon,
  //   cartoon: cartoon
  // };
  const newChar = { name, occupation, weapon, cartoon };
  console.log(newChar);
  charactersAPI
    .createOneRegister(newChar)
    .then(dbRes => console.log(dbRes))
    .catch(err => console.log(err));
};
