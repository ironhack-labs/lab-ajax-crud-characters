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
      let characterId = document.querySelector("#id-input").value;

      charactersAPI.getOneRegister(characterId).then((character) => {
        let oneCharacter = character.data;
        let oneCard = `<div class="character-info">
        <div class="name">${oneCharacter.name}</div>
        <div class="occupation">${oneCharacter.occupation}</div>
        <div class="cartoon">${oneCharacter.cartoon}</div>
        <div class="weapon">${oneCharacter.weapon}</div>
        </div>`;

        let container = document.querySelector(".characters-container");

        container.innerHTML = oneCard;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let characterId = document.querySelector("#delete-input").value;

      charactersAPI
        .deleteOneRegister(characterId)
        .then(() => {
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch(() => {
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.updateOneRegister();
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let createForm = document.querySelectorAll("#new-character-form");

      console.log(createForm[0][0].name.value);
      // createForm.forEach((input) => {
      //   console.log(input);
      // });
      // charactersAPI.createOneRegister();
    });
});
