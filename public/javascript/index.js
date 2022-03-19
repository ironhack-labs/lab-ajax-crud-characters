const charactersAPI = new APIHandler("http://localhost:8000");
const characterContainer = document.querySelector(".characters-container");
const characterId = document.querySelector('input[name="character-id"]');
const characterIdDelete = document.querySelector(
  'input[name="character-id-delete"]'
);

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((characterList) => {
          let characterCard = "";
          characterList.data.forEach((character) => {
            characterCard += `<div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
        </div>`;
          });
          characterContainer.innerHTML = characterCard;
        })
        .catch((err) => console.log(err.message));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI.getOneRegister(characterId.value).then((character) => {
        let characterCard = character.data;
        let characterHTML = `<div class="character-info">
      <div class="name">${character.data.name}</div>
      <div class="occupation">${character.data.occupation}</div>
      <div class="cartoon">${character.data.cartoon}</div>
      <div class="weapon">${character.data.weapon}</div>
      </div>`;
        characterContainer.innerHTML = characterHTML;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .deleteOneRegister(characterIdDelete.value)
        .then(() => {
          charactersAPI
            .getFullList()
            .then((character) => {
              let characterHTML = "";
              character.data.forEach((character) => {
                characterHTML += `<div class="character-info">
          <div class="name">name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Cartoon: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon} Weapon</div>
          </div>`;
              });
              characterContainer.innerHTML = characterHTML;
            })
            .catch((err) => console.log(err.message));
        })
        .catch((err) => console.log(err.message));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      let characterObj = {};
      new FormData(event.target).forEach(
        (value, key) => (characterObj[key] = value)
      );
      let { chrId, name, occupation, cartoon, weapon } = characterObj;
      charactersAPI
        .updateOneRegister(chrId, { name, occupation, cartoon, weapon })
        .then((res) => {
          let character = res.data;
          let characterHTML = `<div class="character-info">
      <div class="name">name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Cartoon: ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon} Weapon</div>
      </div>`;
          characterContainer.innerHTML = characterHTML;
        })
        .catch((err) => console.log(err.message));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      let characterObj = {};
      new FormData(event.target).forEach(
        (value, key) => (characterObj[key] = value)
      );
      let { name, occupation, cartoon, weapon } = characterObj;

      charactersAPI
        .createOneRegister({ name, occupation, cartoon, weapon })
        .then((res) => {
          let character = res.data;
          let characterHTML = `<div class="character-info">
      <div class="name">name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Cartoon: ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon} Weapon</div>
      </div>`;
          characterContainer.innerHTML = characterHTML;
        })
        .catch((err) => console.log(err.message));
    });
});
