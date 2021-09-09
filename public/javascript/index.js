const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((characters) => {
          const charactersArray = characters.data;
          console.log(charactersArray);
          document.getElementById("characters-container").innerText = "";

          for (let i = 0; i < charactersArray.length; i++) {
            document.getElementById(
              "characters-container"
            ).innerHTML += `<div class="character-info">
        <div class="id"> Id: ${charactersArray[i].id} </div>
        <div class="name"> Name: ${charactersArray[i].name} </div>
        <div class="occupation"> Character Occupation: ${charactersArray[i].occupation}</div>
        <div class="cartoon">Is a Cartoon? ${charactersArray[i].cartoon}</div>
        <div class="weapon">Character Weapon: ${charactersArray[i].weapon}</div>
        </div>
        <br>`;
          }
        })
        .error(console.log(error));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("fetch-character-id").value;
      console.log(characterId);
      charactersAPI
        .getOneRegister(characterId)
        .then((response) =>
          // (console.log(response.data))
          {
            document.getElementById("characters-container").innerText = "";
            document.getElementById(
              "characters-container"
            ).innerHTML += `<div class="character-info">
        <div class="id"> Id: ${response.data.id} </div>
        <div class="name"> Name: ${response.data.name} </div>
        <div class="occupation"> Character Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
        <div class="weapon">Character Weapon: ${response.data.weapon}</div>
        </div>
        <br>`;
          }
        )
        .catch((error) => error);
    });
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("delete-character-id").value;
      // console.log(characterId)
      charactersAPI
        .deleteOneRegister(characterId)
        .then()
        .catch((error) => console.log(error));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const characterId = document.getElementById("updated-id").value;
      console.log(characterId);
      const characterInfo = {
        name: document.getElementById("updated-name").value,
        occupation: document.getElementById("updated-occupation").value,
        cartoon: document.getElementById("updated-cartoon").value,
        weapon: document.getElementById("updated-weapon").value,
      };
      charactersAPI
        .updateOneRegister(characterId, characterInfo)
        .then()
        .catch((error) => console.log(error));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const characterInfo = {
        name: document.getElementById("new-name").value,
        occupation: document.getElementById("new-occupation").value,
        cartoon: document.getElementById("new-cartoon").value,
        weapon: document.getElementById("new-weapon").value,
      };
      charactersAPI
        .createOneRegister(characterInfo)
        .then()
        .catch((error) => console.log(error));
    });
});
