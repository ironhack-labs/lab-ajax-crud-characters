const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((allCharacters) => {
        let fullList = allCharacters.data;

        fullList.forEach((character) => {
          let characterContainer = document.querySelector(
            ".characters-container"
          );
          let divChar = document.createElement("div");
          divChar.classList.add("character-info");
          characterContainer.appendChild(divChar);

          let divName = document.createElement("div");
          divName.classList.add("name");
          divName.innerHTML = `Name: ${character.name}`;
          divChar.appendChild(divName);

          let divOccup = document.createElement("div");
          divOccup.classList.add("occupation");
          divOccup.innerHTML = `Occupation: ${character.occupation}`;
          divChar.appendChild(divOccup);

          let divCartoon = document.createElement("div");
          divCartoon.classList.add("cartoon");
          divCartoon.innerHTML = `Is a cartoon: ${character.cartoon}`;
          divChar.appendChild(divCartoon);

          let divWeapon = document.createElement("div");
          divWeapon.classList.add("weapon");
          divWeapon.innerHTML = `Weapon: ${character.weapon}`;
          divChar.appendChild(divWeapon);
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI.getOneRegister();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI.deleteOneRegister();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.updateOneRegister();
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.createOneRegister();
    });
});
