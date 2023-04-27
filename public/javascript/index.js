// const { all } = require("dog-names");

const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const response = await charactersAPI.getFullList("characters");
      console.log("Here is all the characters", response);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const idInput = document.querySelector(".operation input").value;
      const oneChar = await charactersAPI.getOneRegister(idInput);
      document.querySelector(
        ".characters-container .name"
      ).innerHTML = `Character Name: ${oneChar.name}`;
      console.log(oneChar);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      const id = document.querySelector(
        "#delete-one input[name=character-id-delete]"
      ).value;
      await charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const id = document.querySelector(
        "#edit-character-form input[name=chr-id]"
      ).value;
      const name = document.querySelector(
        "#edit-character-form input[name=name]"
      ).value;
      const occupation = document.querySelector(
        "#edit-character-form input[name=occupation]"
      ).value;
      const weapon = document.querySelector(
        "#edit-character-form input[name=weapon]"
      ).value;
      const cartoon = document.querySelector(
        "#edit-character-form input[name=cartoon]"
      ).checked;
      const updateCharacter = { id, name, occupation, weapon, cartoon };
      const updatedChar = await charactersAPI.updateOneRegister(
        id,
        updateCharacter
      );
      updatedChar.data;
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const name = document.querySelector(
        "#new-character-form input[name=name]"
      ).value;
      const occupation = document.querySelector(
        "#new-character-form input[name=occupation]"
      ).value;
      const weapon = document.querySelector(
        "#new-character-form input[name=weapon]"
      ).value;
      const cartoon = document.querySelector(
        "#new-character-form input[name=cartoon]"
      ).checked;
      const newChar = { name, occupation, weapon, cartoon };
      const addedChar = await charactersAPI.createOneRegister(newChar);
      addedChar.data;
    });
});
