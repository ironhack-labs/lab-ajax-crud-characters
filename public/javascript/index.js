const charactersAPI = new APIHandler("http://localhost:8000");

const charaContainer = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const allCharacters = await charactersAPI.getFullList();
      charaContainer.innerHTML = "";
      allCharacters.data.forEach((chara) => {
        charaContainer.innerHTML += `<div class="character-info"><div class="name">Name: ${chara.name}</div>
        <div class="name">Occupation: ${chara.occupation}</div>
        <div class="name">Cartoon: ${chara.cartoon}</div>
        <div class="name">Weapon: ${chara.weapon}</div></div>`;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const oneID = document.querySelector(".operation > input").value;
      const oneCharacter = await charactersAPI.getOneRegister(oneID);
      charaContainer.innerHTML = "";
      charaContainer.innerHTML += `<div class="character-info"><div class="name">Name: ${oneCharacter.data.name}</div><div class="name">Occupation: ${oneCharacter.data.occupation}</div><div class="name">Cartoon: ${oneCharacter.data.cartoon}</div><div class="name">Weapon: ${oneCharacter.data.weapon}</div></div>`;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      const oneDelete = document.querySelector(".delete > input").value;
      return await charactersAPI.deleteOneRegister(oneDelete);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      const newName = document.getElementById("new-character-form").name.value;
      const newOccupation = document.getElementById("new-character-form")
        .occupation.value;
      const newCartoon = document.getElementById("new-character-form").cartoon
        .checked;
      const newWeapon = document.getElementById("new-character-form").weapon
        .value;
      return await charactersAPI.createOneRegister({
        name: newName,
        occupation: newOccupation,
        cartoon: newCartoon,
        weapon: newWeapon,
      });
    });
});
