const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getAllCharacters()
        .then((response) => {
          let html = "";
          response.data.forEach((character) => {
            html += `
              <div class="character-info">
                <div class="name">Name: ${character.name}</div>
                <div class="occupation">Occupation: ${character.occupation}</div>
                <div class="cartoon">is a Cartoon?: ${character.cartoon}</div>
                <div class="weapon">Weapon: ${character.weapon}</div>
              </div>
            `;
          });
          document.querySelector(".characters-container").innerHTML = html;
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.querySelector(".operation input").value;
      charactersAPI.getOneCharacter(characterId).then((character) => {
        let html = `<div class="character-info">
          <div class="name">Name: ${character.data.name}</div>
          <div class="occupation">Occupation: ${character.data.occupation}</div>
          <div class="cartoon">is a Cartoon?: ${character.data.cartoon}</div>
          <div class="weapon">Weapon: ${character.data.weapon}</div>
        </div>`;
        document.querySelector(".characters-container").innerHTML = html;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterId = document.querySelector(
        ".operation_delete input"
      ).value;
      charactersAPI
        .deleteCharacter(characterId)
        .then(() => {
          const btn = document.querySelector("#delete-one");
          btn.setAttribute("style", "background-color: green");
        })
        .catch((error) => {
          const btnErr = document.querySelector("#delete-one");
          btnErr.setAttribute("style", "background-color: red");
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = document.getElementById("edit-character-form");
      const formData = new FormData(form);

      const characterId = formData.get("chr-id");
      const name = formData.get("name");
      const occupation = formData.get("occupation");
      const weapon = formData.get("weapon");
      const cartoon = formData.get("cartoon") === "on";
      const characterInfo = { name, occupation, weapon, cartoon };

      charactersAPI
        .editCharacter(characterId, characterInfo)
        .then(() => {
          const btn = document.querySelector("#send-data-edit");
          btn.setAttribute("style", "background-color: green");
        })
        .catch((error) => {
          const btnErr = document.querySelector("#send-data-edit");
          btnErr.setAttribute("style", "background-color: red");
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = document.getElementById("new-character-form");
      const formData = new FormData(form);

      const name = formData.get("name");
      const occupation = formData.get("occupation");
      const weapon = formData.get("weapon");
      const cartoon = formData.get("cartoon") === "on";
      const characterInfo = { name, occupation, weapon, cartoon };

      charactersAPI
        .createCharacter(characterInfo)
        .then(() => {
          const btn = document.querySelector("#send-data");
          btn.setAttribute("style", "background-color: green");
        })
        .catch((error) => {
          const btnErr = document.querySelector("#send-data");
          btnErr.setAttribute("style", "background-color: red");
        });
    });
});
