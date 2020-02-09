import APIHandler from "./APIHandler.js";

///////////////////////
// APIHandler class instanciation
const charactersAPI = new APIHandler("http://localhost:8000", "characters");
// const productsAPI = new APIHandler("http://localhost:8080", "products");

///////////////////////
// dom elements
const container = document.querySelector(".characters-container");
const btnFetchAll = document.getElementById("fetch-all");
const btnGetOne = document.getElementById("fetch-one");
const btnDeleteOne = document.getElementById("delete-one");
const btnEditChar = document.getElementById("edit-character-form");
const btnNewChar = document.getElementById("new-character-form");

///////////////////////
// utilities

function renderCharacters(arr) {
  if (!arr.length) arr = [arr];
  // above: if arr is a single object, assign it to an array (used by forEach below =>)
  container.innerHTML = ""; // reset chars list html content
  arr.forEach(char => {
    // loop through each char and draw some html
    const str = `<div class="character-info">
      <div class="name">${char.name} (id: ${char.id})</div>
      <div class="occupation">${char.occupation}</div>
      <div class="cartoon">${char.cartoon ? "is" : "is not"} a cartoon</div>
      <div class="weapon">${char.weapon}</div>
    </div>`;
    container.innerHTML += str; // assign the generated string to char container
  });
}

///////////////////////

function getFormData(formId) {
  const inputs = document.querySelectorAll(`#${formId} [name]`);
  // Array.from(inputs) alias of [...inputs]
  return [...inputs].reduce((a, inpt) => {
    a[inpt.name === "chr-id" ? "id" : inpt.name] =
      inpt.name !== "cartoon" ? inpt.value : inpt.checked;
    return a;
  }, {});
}


btnEditChar.onsubmit = evt => {
  evt.preventDefault(); // prevents page reload
  charactersAPI.updateOneRegister(
    apiRes => btnFetchAll.click(),
    getFormData("edit-character-form")
  );
  // above : 2nd param is the data to post ( containing char's id + char's other infos )
};

btnNewChar.onsubmit = evt => {
  evt.preventDefault(); // prevents page reload
  charactersAPI.createOneRegister(
    apiRes => btnFetchAll.click(),
    getFormData("new-character-form")
  );
  // above : 2nd param is the data to post
};

// events handling => API calls

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

