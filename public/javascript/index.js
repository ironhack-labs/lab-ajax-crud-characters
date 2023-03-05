const charactersAPI = new APIHandler("http://localhost:8000");
const charContainer = document.querySelector(".characters-container");

generateCharDom = (character) => {
  const charDom = document.createElement("div");
  charDom.classList.add("character-info");
  charDom.innerHTML = `
  <div class="name">${character.name}</div>
  <div class="occupation">${character.occupation}</div>
  <div class="cartoon">${
    character.cartoon ? "It's a cartoon" : "It's not a cartoon"
  }</div>
  <div class="weapon">${character.weapon}</div>
  `;

  return charDom;
};

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((chars) => {
        const characters = chars.data;

        // gets rid of the default character div
        charContainer.innerHTML = "";

        // iterates over the characters and create a new div
        characters.forEach((character) => {
          charContainer.appendChild(generateCharDom(character));
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const charId = document.querySelector(".charId").value;

      charactersAPI.getOneRegister(charId).then((res) => {
        character = res.data;
        // gets rid of the default character div
        charContainer.innerHTML = "";

        charContainer.appendChild(generateCharDom(character));
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const charId = document.querySelector(
        `input[name="character-id-delete"]`
      ).value;

      charactersAPI.deleteOneRegister(charId);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      let editCharForm = document.getElementById("edit-character-form");
      let charId = document.querySelector(`input[name="chr-id`).value

      let charInfo = {
        name: editCharForm.name.value,
        occupation: editCharForm.occupation.value,
        weapon: editCharForm.weapon.value,
        cartoon: editCharForm.cartoon.checked     
      }

      charactersAPI.updateOneRegister(charId,charInfo)
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      let newCharForm = document.getElementById("new-character-form");

      let charInfo = {
        name: newCharForm.name.value,
        occupation: newCharForm.occupation.value,
        weapon: newCharForm.weapon.value,
        cartoon: newCharForm.cartoon.checked     
      }

      charactersAPI.createOneRegister(charInfo)

    });
});
