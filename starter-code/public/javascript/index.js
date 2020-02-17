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

// APIHandler class instanciation
const api = new APIHandler("http://localhost:8000");

// DOM
const container = document.querySelector(".characters-container");
const btnGetAll = document.getElementById("fetch-all");
const btnGetOne = document.getElementById("fetch-one");
const btnDeleteOne = document.getElementById("delete-one");
const btnEditChar = document.getElementById("edit-character-form");
const btnNewChar = document.getElementById("new-character-form");
const inputIdGetOne = document.querySelector("[name=character-id]");
const inputIdDelete = document.querySelector("[name=character-id-delete]");

// FUNCTIONS

function renderCharacters(arr) {
  container.innerHTML = ""; // reset chars list html content
  arr.forEach(char => {
    const str = `<div class="character-info">
      <div class="name">${char.name} (id: ${char.id})</div>
      <div class="occupation">${char.occupation}</div>
      <div class="cartoon">${char.cartoon ? "is" : "is not"} a cartoon</div>
      <div class="weapon">${char.weapon}</div>
    </div>`;
    container.innerHTML += str; // assign the generated string to char container
  });
}

function getData(formId) {
  const inputs = document.querySelectorAll(`#${formId} [name]`);
  // Array.from(inputs) === [...inputs]
  return [...inputs].reduce((a, inpt) => {
    a[inpt.name === "chr-id" ? "id" : inpt.name] =
      inpt.type !== "checkbox" ? inpt.value : inpt.checked;
    return a;
  }, {}); // reduce to a single object literal : for create/update tasks
}

function wrap(myPromise) {
  myPromise
    .then(APIRes => ({ error: null, data: APIRes.data }))
    .catch(APIError => {
      console.error(APIError);
      return { error: APIError, data: null };
    });
}

// event listening/handling
btnGetAll.onclick = async () => {
  const { error, data } = await wrap(api.getAll());
  if (!error) return renderCharacters(data);
};

btnGetOne.onclick = async () => {
  const { error, data } = await wrap(api.get(inputIdGetOne.value));
  if (!error) return renderCharacters([data]);
};

btnDeleteOne.onclick = async () => {
  const { error } = await wrap(api.get(inputIdDelete.value));
  if (!error) return btnGetAll.click(); // reinit the view by fetching all characters
};

window.onsubmit = e => e.preventDefault(); // prevents page reload for all form on this document

btnEditChar.onsubmit = async () => {
  const { error } = await wrap(api.update(getData("edit-character-form")));
  if (!error) return btnGetAll.click(); // reinit the view by fetching all characters
};

btnNewChar.onsubmit = async () => {
  const { error } = await wrap(api.create(getData("new-character-form")));
  if (!error) return btnGetAll.click(); // reinit the view by fetching all characters
};