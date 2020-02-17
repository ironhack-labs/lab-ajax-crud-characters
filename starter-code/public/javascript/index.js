// import APIHandler from "./APIHandler.js";

// const charactersAPI = new APIHandler('http://localhost:8000');

// window.addEventListener('load', () => {
//   document.getElementById('fetch-all').addEventListener('click', function (event) {
//   });


//   document.getElementById('fetch-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('delete-one').addEventListener('click', function (event) {

//   });

//   document.getElementById('edit-character-form').addEventListener('submit', function (event) {

//   });

//   document.getElementById('new-character-form').addEventListener('submit', function (event) {

//   });
// });

import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8000", "characters");

// DOM
const container = document.querySelector(".characters-container");
const btnFetchAll = document.getElementById("fetch-all");
const btnGetOne = document.getElementById("fetch-one");
const btnDeleteOne = document.getElementById("delete-one");
const btnEditChar = document.getElementById("edit-character-form");
const btnNewChar = document.getElementById("new-character-form");

// FUNCTIONS

function renderCharacters(arr) {
  if (!arr.length) arr = [arr];
  container.innerHTML = "";
  arr.forEach(char => {
    const str = 
    `<div class="character-info">
    <div class="id">Id: ${char.id}</div>
    <div class="name">Character Name: ${char.name}</div>
    <div class="occupation">Character Occupation: ${char.occupation}</div>
    <div class="cartoon">Is a Cartoon?: ${char.cartoon ? "is" : "is not"} a cartoon</div>
    <div class="weapon">Character Weapon: ${char.weapon}</div>
  </div>`;
    container.innerHTML += str;
  });
}

function getFormData(formId) {
  const inputs = document.querySelectorAll(`#${formId} [name]`);
  return [...inputs].reduce((a, inpt) => {
    a[inpt.name === "chr-id" ? "id" : inpt.name] =
      inpt.name !== "cartoon" ? inpt.value : inpt.checked;
    return a;
  }, {});
}


btnEditChar.onsubmit = evt => {
  evt.preventDefault();
  charactersAPI.updateOneRegister(
    apiRes => btnFetchAll.click(),
    getFormData("edit-character-form")
  );
};

btnNewChar.onsubmit = evt => {
  evt.preventDefault();
  charactersAPI.createOneRegister(
    apiRes => btnFetchAll.click(),
    getFormData("new-character-form")
  );
};

//API CALLS

btnFetchAll.onclick = () =>
  charactersAPI.getFullList(apiRes => {
    if (apiRes.err) return alert("error" + apiRes.err);
    renderCharacters(apiRes);
  });

btnGetOne.onclick = () => {
  const id = document.querySelector("[name=character-id]").value;
  if (!id) return console.warn("must send an id to API server");
  charactersAPI.getOneRegister(apiRes => {
    if (apiRes.err) return alert("error" + apiRes.err);
    renderCharacters(apiRes);
  }, id);
};

btnDeleteOne.onclick = () => {
  const id = document.querySelector("[name=character-id-delete]").value;
  if (!id) return console.warn("must send an id to API server");
  charactersAPI.deleteOneRegister(apiRes => btnFetchAll.click(), id);
};
