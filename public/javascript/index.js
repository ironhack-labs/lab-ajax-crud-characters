const charactersAPI = new APIHandler("http://localhost:8000");

//* Display character's cards
const displayCard = (characters) => {
  const characterContainer = document.querySelector(".characters-container");
  characterContainer.innerHTML = "";
  for (const character of characters) {
    let { id, name, occupation, cartoon, weapon } = character;
    characterContainer.innerHTML += `<div class="character-info">
    <div class="id">Id: ${id}</div>
    <div class="name">Name: ${name}</div>
    <div class="occupation">Occupation: ${occupation}</div>
    <div class="cartoon">Cartoon: ${cartoon}</div>
    <div class="weapon">Weapon: ${weapon}</div>
    </div>`;
  }
};

//* Display all characters
window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const list = await charactersAPI.getFullList();
        displayCard(list.data);
      } catch (error) {
        console.log(error);
      }
    });

  //* Display one characters
  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        const id = document.querySelector("input[name=character-id]").value;
        const searchedCharacter = await charactersAPI.getOneRegister(id);
        displayCard(searchedCharacter);
      } catch (error) {
        console.log(error);
      }
      document.querySelector("input[name=character-id]").defaultValue = "";
    });

  //* Delete a character
  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      try {
        const id = document.querySelector("input[name=character-id-delete]")
          .value;
        const deletedCharacter = await charactersAPI.deleteOneRegister(id);
      } catch (error) {
        console.log(error);
      }
      document.querySelector("input[name=character-id-delete]").defaultValue =
        "";
    });

  //* Edit a character
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const form = document.querySelector("#edit-character-form");
      const updatedInfo = {
        name: form.querySelector("input[name=name]").value,
        occupation: form.querySelector("input[name=occupation]").value,
        weapon: form.querySelector("input[name=weapon]").value,
        cartoon: form.querySelector("input[name=cartoon]").checked,
      };
      try {
        const id = document.querySelector("input[name=chr-id]").value;
        const updatedCharacter = await charactersAPI.updateOneRegister(
          updatedInfo,
          id
        );
      } catch (error) {
        console.log(error);
      }
      document.querySelector("#edit-character-form").reset();
    });

  //* Create a new character
  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const form = document.querySelector("#new-character-form");
      const newInfo = {
        name: form.querySelector("input[name=name]").value,
        occupation: form.querySelector("input[name=occupation]").value,
        weapon: form.querySelector("input[name=weapon]").value,
        cartoon: form.querySelector("input[name=cartoon]").checked,
      };
      try {
        const createdCharacter = await charactersAPI.createOneRegister(newInfo);
      } catch (error) {
        console.log(error);
      }
      document.querySelector("#new-character-form").reset();
    });
});
