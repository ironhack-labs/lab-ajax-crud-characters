const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      const charContainer = document.querySelector(".characters-container");
      charactersAPI.getFullList().then((allCharacters) => {
        charContainer.innerHTML = "";
        allCharacters.forEach((character) => {
          charContainer.innerHTML += `<div class="character-info">
            <div class="id">ID: ${character.id}</div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="weapon">Weapon: ${character.weapon}</div>
            <div class="cartoon"> 
            ${character.cartoon ? "It is a cartoon" : "Is is not a cartoon"}
            </div>
          </div>`;
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = event.originalTarget.parentElement.children[1]["value"];

      charactersAPI.getOneRegister(id).then((character) => {
        if (character) {
          document.querySelector(
            ".characters-container"
          ).innerHTML = `<div class="character-info">
        <div class="id">ID: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
        <div class="cartoon"> 
        ${character.cartoon ? "It is a cartoon" : "Is is not a cartoon"}
        </div>
      </div>`;
        } else {
          alert("Character with ID: " + id + " not found.");
        }
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = event.originalTarget.parentElement.children[1]["value"];

      const button = event.originalTarget.parentElement.children[2];

      charactersAPI.getOneRegister(id).then((characterFromDb) => {
        if (characterFromDb) {
          charactersAPI.deleteOneRegister(id);
          button.classList.add("success");
          button.classList.remove("fail");
        } else {
          button.classList.remove("success");
          button.classList.add("fail");
        }
      });
    });

  const editCharacterForm = document.getElementById("edit-character-form");

  editCharacterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = editCharacterForm["chr-id"].value;
    const occupation = editCharacterForm["occupation"].value;
    const name = editCharacterForm["name"].value;
    const weapon = editCharacterForm["weapon"].value;
    const cartoon = editCharacterForm["cartoon"].checked;

    charactersAPI.updateOneRegister(id, { name, occupation, weapon, cartoon });
  });

  const newCharacterForm = document.getElementById("new-character-form");

  newCharacterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const occupation = newCharacterForm["occupation"].value;
    const name = newCharacterForm["name"].value;
    const weapon = newCharacterForm["weapon"].value;
    const cartoon = newCharacterForm["cartoon"].checked;

    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
  });
});
