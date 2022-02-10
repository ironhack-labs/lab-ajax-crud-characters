const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      let characterDiv = document.getElementsByClassName(
        "characters-container"
      )[0];
      characterDiv.innerHTML = "";
      charactersAPI.getFullList().then((characters) => {
        characters.forEach((character) => {
          characterDiv.insertAdjacentHTML(
            "beforeend",
            `<div class="character-info">
        <div class="characterid">ID: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`
          );
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      console.log(event);
      let toSearch = document.getElementsByName("character-id")[0].value;
      charactersAPI.getOneRegister(toSearch).then((character) => {
        let characterDiv = document.getElementsByClassName(
          "characters-container"
        )[0];
        characterDiv.innerHTML = "";
        characterDiv.insertAdjacentHTML(
          "beforeend",
          `<div class="character-info">
        <div class="characterid">ID: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`
        );
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let toDelete = document.getElementsByName("character-id-delete")[0].value;
      charactersAPI.deleteOneRegister(toDelete);
      document.getElementById("fetch-all").click();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let theform = document
        .getElementById("edit-character-form")
        .getElementsByTagName("input");

      let formarray = Array.prototype.slice.call(theform);
      let newchar = {};
      formarray.forEach((input, index) => {
        newchar[input.name === "chr-id" ? "id" : input.name] =
          index !== 4 ? input.value : input.checked;
      });
      charactersAPI.updateOneRegister(newchar);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let theform = document
        .getElementById("new-character-form")
        .getElementsByTagName("input");

      let formarray = Array.prototype.slice.call(theform);
      let newchar = {};
      formarray.forEach((input, index) => {
        newchar[input.name === "chr-id" ? "id" : input.name] =
          index !== 3 ? input.value : input.checked;
      });
      charactersAPI.createOneRegister(newchar);
    });
});
