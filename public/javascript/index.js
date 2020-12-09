const charactersAPI = new APIHandler("http://localhost:8000");
const charactersInfo = document.querySelector(".character-info");
let charactersContainer = document.querySelector(".characters-container");
let fetchOneInput = document.querySelector(".operation input");
let fetchDelete = document.querySelector(".delete input");
const nameCreate = document.getElementById("name-create");
const occupationCreate = document.getElementById("occupation-create");
const weaponCreate = document.getElementById("weapon-create");
const cartoonCreate = document.getElementById("cartoon-create");
const editCharacterForm = document.getElementById("edit-character-form");
const idUpdate = document.getElementById("id-update");
const nameUpdate = document.getElementById("name-update");
const occupationUpdate = document.getElementById("occupation-update");
const weaponUpdate = document.getElementById("weapon-update");
const cartoonUpdate = document.getElementById("cartoon-update");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      let arrayOfCharacters = await charactersAPI.getFullList();
      console.log(arrayOfCharacters);
      charactersContainer.innerHTML = "";
      arrayOfCharacters.forEach((element) => fetchCartoon(element));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      console.log(fetchOneInput.value);
      let id = fetchOneInput.value;
      let character = await charactersAPI.getOneRegister(id);
      console.log(character);
      charactersContainer.innerHTML = "";
      fetchCartoon(character);
      fetchOneInput.value = "";
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      console.log(fetchDelete.value);
      let id = fetchDelete.value;
      let character = await charactersAPI.deleteOneRegister(id);
      console.log(character);
      fetchDelete.value = "";
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      let id = idUpdate.value;
      const updatedDatas = {
        name: nameUpdate.value,
        occupation: occupationUpdate.value,
        weapon: weaponUpdate.value,
        cartoon: cartoonUpdate.value,
      };
      await charactersAPI.updateOneRegister(id, updatedDatas);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      let datas = prepareData();
      await charactersAPI.createOneRegister(datas);
    });
});

function fetchCartoon(object) {
  let charactersInfo = document.createElement("div");
  charactersInfo.classList.add("character-info");
  charactersInfo.innerHTML = `   <div class="id">Id: ${object.id}</div>
    <div class="name">Name: ${object.name}</div>
    <div class="occupation">Occupation: ${object.occupation}</div>
    <div class="cartoon">Is a Cartoon? ${object.cartoon}</div>
    <div class="weapon">Weapon: ${object.weapon}</div>`;
  charactersContainer.appendChild(charactersInfo);
}

function prepareData() {
  const name = nameCreate.value;
  const occupation = occupationCreate.value;
  const weapon = weaponCreate.value;
  const cartoon = cartoonCreate.value;
  return name && occupation && weapon && cartoon
    ? {
        name,
        occupation,
        weapon,
        cartoon,
      }
    : null;
}
