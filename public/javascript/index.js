const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
      .getFullList()
      .then((result) => {
        console.log(result.data);
        const charactersData = result.data;

        let allCharacters = "";
        for (let i = 0; i < charactersData.length; i++) {
          const character = charactersData[i];

          const characterInfo = `<div class="character-info">
          <div>Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
          </div>`;

          allCharacters += characterInfo;
        }

        document.getElementById("characters-container").innerHTML = allCharacters;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

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
