const charactersAPI = new APIHandler("http://localhost:8000");

console.log("charactersAPI");
console.log(charactersAPI);

// function to create a new object
let createData;

function createOne() {
  const name = document.getElementById("nameCharacter").value;
  const occupation = document.getElementById("occupationCharacter").value;
  const weapon = document.getElementById("weaponCharacter").value;
  const check = document.getElementById("checkCharacter").checked;

  createData = {
    name,
    occupation,
    weapon,
    check,
  };
}

//function to get the existing object and update it
let updateCharacter;

function updateOne() {
  const id = document.getElementById("idElement").value;
  const name = document.getElementById("nameElement").value;
  const occupation = document.getElementById("occupationElement").value;
  const weapon = document.getElementById("weaponElement").value;
  const check = document.getElementById("checkElement").checked;

  updateCharacter = {
    id,
    name,
    occupation,
    weapon,
    check,
  };
}

//
const allCharacters = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const list = charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("characterId").value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const idDelete = document.getElementById("characterDelete").value;
      charactersAPI.deleteOneRegister(idDelete);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      try {
        createOne();
        charactersAPI.createOneRegister(createData);
      } catch (err) {
        console.log("err");
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      try {
        console.log("clicked");
        updateOne();
        charactersAPI.updateOneRegister(updateCharacter.id, updateCharacter);
      } catch (err) {
        console.log("err");
      }
    });
});
