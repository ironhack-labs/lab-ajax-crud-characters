const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      let charactersContainerDomEL = document.querySelector(
        ".characters-container"
      );
      charactersContainerDomEL.innerHTML = "";

      charactersAPI.getFullList().then(characters => {
        // console.log(characters);
        characters.data.forEach(character => {
          charactersContainerDomEL.innerHTML += `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>`;
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      let charactersContainerDomEL = document.querySelector(
        ".characters-container"
      );
      charactersContainerDomEL.innerHTML = "";

      let input = document.querySelector('input[name="character-id"]').value;
      console.log(input);

      charactersAPI.getOneRegister(input).then(character => {
        charactersContainerDomEL.innerHTML += `<div class="character-info">
          <div class="name">${character.data.name}</div>
          <div class="occupation">${character.data.occupation}</div>
          <div class="cartoon">${character.data.cartoon}</div>
          <div class="weapon">${character.data.weapon}</div>
        </div>`;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      let input = document.querySelector('input[name="character-id-delete"]')
        .value;
      console.log(input);
      charactersAPI.deleteOneRegister(input);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault()
      let id = document.querySelector('input[name="chr-id"]').value;
      let namenew = document.querySelector('input[name="nameedit"]').value;
      let occupationnew = document.querySelector('input[name="occupationedit"]')
        .value;
      let weaponnew = document.querySelector('input[name="weaponedit"]').value;
      let checkednew = document.querySelector(".cartoonedit").checked;
      
      let character = {
        name: namenew,
        occupation: occupationnew,
        cartoon: checkednew,
        weapon: weaponnew
      };
      console.log(id)
      charactersAPI.updateOneRegister(id, character);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      let namenew = document.querySelector('input[name="namenew"]').value;
      let occupationnew = document.querySelector('input[name="occupationnew"]')
        .value;
      let weaponnew = document.querySelector('input[name="weaponnew"]').value;
      let checkednew = document.querySelector(".checkednew").checked;
      let character = {
        name: namenew,
        occupation: occupationnew,
        cartoon: checkednew,
        weapon: weaponnew
      };
      console.log(document.querySelector('input[name="namenew"]'.value));
      charactersAPI.createOneRegister(character);
    });
});
