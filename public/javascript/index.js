const charactersAPI = new APIHandler("http://localhost:8000");
const charactersBlock = document.getElementById("allCharacters");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getAllCharacters()
        .then((results) => {
          const characters = results.data;
          charactersBlock.innerHTML = "";
          for (let i = 0; i < characters.length; i++) {
            charactersBlock.innerHTML += `<div class="character-info">
            <div class="name">Name: ${characters[i].name}</div>
            <div class="id">id: ${characters[i].id}</div>
            <div class="occupation">Occupation: ${characters[i].occupation}</div>
            <div class="cartoon">Cartoon?: ${characters[i].cartoon}</div>
            <div class="weapon">Weapon: ${characters[i].weapon}</div>
          </div>`;
          }
        })
        .catch((err) => console.log(err));
      event.preventDefault();
    });

  document.getElementById("fetch-one").addEventListener("click", function(event){
    const characterID = document.getElementById("character-id").value;
    charactersAPI
      .getOneCharacter(characterID)
      .then((result) => {
        const character = result.data;
        charactersBlock.innerHTML = "";
        charactersBlock.innerHTML += `<div class="character-info">
        <div class="name">Name: ${character.name}</div>
        <div class="id">id: ${character.id}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`;
      })
      .catch((err) => console.log(err));
  
    event.preventDefault();
  });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const characterID = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteCharacter(characterID)
        .catch((err) => console.log(err));

      event.preventDefault();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const characterID = document.getElementById("edit-character-id").value;
      const existingCharacter = {};
      charactersAPI.getOneCharacter(characterID).then((result) => {
        existingCharacter = result.data;
      });
      let cartoonBool = false;
      if ((document.getElementById("edit-character-cartoon").value = "on")) {
        cartoonBool = true;
      }
      if ((document.getElementById("edit-character-cartoon").value = "off")) {
        cartoonBool = false;
      }

      const editCharacter = {
        name: document.getElementById("edit-character-name").value,
        occupation: document.getElementById("edit-character-occupation").value,
        weapon: document.getElementById("edit-character-weapon").value,
        cartoon: cartoonBool,
      };
      //delete this part

      charactersAPI
        .editCharacter(characterID, editCharacter)

      event.preventDefault();
    });

  document
    .getElementById("send-new-data")
    .addEventListener("click", function (event) {
      const newCharacter = {
        name: document.getElementById("new-character-name").value,
        occupation: document.getElementById("new-character-occupation").value,
        weapon: document.getElementById("new-character-weapon").value,
        cartoon: document.getElementById("new-character-cartoon").value,
      };

      charactersAPI.createCharacter(newCharacter);
      event.preventDefault();
    });
});

document
  .getElementById("edit-character-id")
  .addEventListener("change", function (event) {
    charactersAPI
      .getOneCharacter(document.getElementById("edit-character-id").value)
      .then((result) => {
        const character = result.data;
        console.log(character);
        document.getElementById("edit-character-id").value = character.id;
        document.getElementById("edit-character-name").value = character.name;
        document.getElementById("edit-character-occupation").value =
          character.occupation;
        document.getElementById("edit-character-weapon").value =
          character.weapon;
        document.getElementById("edit-character-cartoon").value =
          character.cartoon;
      });
    event.preventDefault();
  });


