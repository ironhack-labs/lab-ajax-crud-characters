const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();

      charactersAPI
        .getFullList()
        .then(response => {
          const characters = response.data;
          console.log(characters);

          document.querySelector(".characters-container").innerHTML = "";

          characters.forEach((character) => {
            const characterInfo = `<div class="character-info">
    <div class ="id">Id:<span>${character.id}</span></div>
    <div class="name">Character Name:<span> ${character.name}</span></div>
    <div class="occupation">Character Occupation:<span> ${character.occupation}</span></div>
    <div class="cartoon"><span>${character.cartoon}</div>
    <div class="weapon">Character Weapon:<span> ${character.weapon}</span></div>
  </div>`;

            document.querySelector(".characters-container").innerHTML +=
              characterInfo;
          });
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const characterId = document.querySelector("[name=character-id]").value;
      console.log(characterId);

      charactersAPI.getOneRegister(characterId).then((response) => {
        const character = response.data;
        const characterInfo = `<div class="character-info">
      <div class ="id">Id:<span>${character.id}</span></div>
      <div class="name">Character Name:<span> ${character.name}</span></div>
      <div class="occupation">Character Occupation:<span> ${character.occupation}</span></div>
      <div class="cartoon"><span>${character.cartoon}</div>
      <div class="weapon">Character Weapon:<span> ${character.weapon}</span></div>
    </div>`;
        document.querySelector(".characters-container").innerHTML =
          characterInfo;
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const characterId = document.querySelector(
        "[name=character-id-delete]"
      ).value
      charactersAPI
        .deleteOneRegister(characterId)
        .then(() => {
          document.querySelector("#delete-one").style.backgroundColor = "green";
        })
        .catch((err) => {
          document.querySelector("#delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

    
      const id = document.querySelector("#edit-character-form input[name=chr-id]").value
      const name = document.querySelector("#edit-character-form input[name=name]").value
      const occupation = document.querySelector("#edit-character-form input[name=occupation]").value
      const weapon = document.querySelector("#edit-character-form input[name=weapon]").value
      const cartoon = document.querySelector("#edit-character-form input[name=cartoon]").checked

      charactersAPI.updateOneRegister( id, { name, occupation, weapon, cartoon })
      .then(updatedCharacter => {
        document.querySelector("#edit-character-form #send-data").style.backgroundColor = "green"
      })
      .catch(err => {
        document.querySelector("#edit-character-form #send-data").style.backgroundColor = "red"
      })
    });

    document.getElementById('new-character-form').addEventListener('submit', function (event) {
      event.preventDefault()

      const name = document.querySelector("#new-character-form input[name=name]").value
      const occupation = document.querySelector("#new-character-form input[name=occupation]").value
      const weapon = document.querySelector("#new-character-form input[name=weapon]").value
      const cartoon = document.querySelector("#new-character-form input[name=cartoon]").checked

      charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
        .then(createdCharacter => {
          document.querySelector("#send-data").style.backgroundColor = "green"
        })
        .catch(err => {
          document.querySelector("#send-data").style.backgroundColor = "red"
        })
    });
  });