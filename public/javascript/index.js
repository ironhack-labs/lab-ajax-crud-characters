const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((result) => {
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

        document.getElementById("characters-container").innerHTML =
          allCharacters;
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("character-id").value;

      charactersAPI.getOneRegister(characterId).then((result) => {
        console.log(result.data);
        const character = result.data;

        const characterInfo = `<div class="character-info">
        <div>Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;

        document.getElementById("characters-container").innerHTML =
          characterInfo;

        document.getElementById("character-id").value = "";
      });

      document.getElementById("character-id").value;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("character-id-delete").value;
      charactersAPI.deleteOneRegister(characterId).then(() => {
        console.log(characterId);

        const deleteButton = document.getElementById("delete-one");
        deleteButton.style.backgroundColor = "#32CD32";

        document.getElementById("character-id-delete").value = "";
      });

      const deleteButton = document.getElementById("delete-one");
      deleteButton.style.backgroundColor = "#FF0000";

      document.getElementById("character-id-delete").value = "";
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
