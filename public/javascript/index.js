const APIHandler = require("./APIHandler");

const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const container = document.getElementsByClassName("characters-container");
      charactersAPI
        .getFullList()
        .then((response) => {
          console.log(response);
          const characterData = response.data;
          console.log(characterData);
          for (const element of characterData) {
            let character = document.createElement("div");
            let charName = document.createElement("div");
            charName.innerText = element.name;
            console.log(element.name);
            let charOccupation = document.createElement("div");
            charOccupation.innerText = element.occupation;
            let charCartoon = document.createElement("div");
            charCartoon.innerText = element.cartoon;
            let charWeapon = document.createElement("div");
            charWeapon.innerText = element.weapon;
            character.append(charName, charOccupation, charCartoon, charWeapon);
          }
          container.appendChild(character);
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      //   const inputId = document.getElementsByName("character-id")
      //  const id = inputId[0].value
      // charactersAPI.getOneRegister(id)
      //   .then(response => {
      //     const charName = document.getElementsByClassName("name")
      //     charName[0].innerText += response.data.name
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
