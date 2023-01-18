const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI
        .getFullList()
        .then((result) => {
          console.log(result);

          const charData = result.data;

          let allCharacters = "";

          for (let i = 0; i < charData.length; i++) {
            const character = charData[i];

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
        })
        .catch((error) => {
          console.log(
            "Something went wrong while fetching all characters: ",
            error
          );
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.getElementById("character-id").value;
      charactersAPI
        .getOneRegister(characterId)
        .then((result) => {
          console.log(result);

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
        })
        .catch((error) => {
          console.log(
            "Something went wrong while fetching one character: ",
            error
          );
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const characterId = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteOneRegister(characterId)
        .then((result) => {
          console.log(result);

          const deleteBtn = document.getElementById("delete-one");

          deleteBtn.style.backgroundColor = "#32CD32";
        })
        .catch((error) => {
          console.log(
            "Something went wrong while deleting a character: ",
            error
          );
          const deleteBtn = document.getElementById("delete-one");

          deleteBtn.style.backgroundColor = "#FF0000";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const editCharacterId = document.getElementById("edit-char-id").value;
      const editCharacterName = document.getElementById("edit-char-name").value;
      const editCharacterOccupation = document.getElementById(
        "edit-char-occupation"
      ).value;
      const editCharacterWeapon =
        document.getElementById("edit-char-weapon").value;
      const editCharacterCartoon =
        document.getElementById("edit-char-cartoon").name === "on"
          ? true
          : false;

      if (editCharacterId) {
        charactersAPI
          .updateOneRegister(editCharacterId, {
            name: editCharacterName,
            occupation: editCharacterOccupation,
            cartoon: editCharacterCartoon,
            weapon: editCharacterWeapon,
          })
          .then((result) => {
            console.log("Character successfully updated: ", result);

            const updateBtn = document.getElementById("send-data");

            updateBtn.style.backgroundColor = "#32CD32";
          })
          .catch((error) => {
            console.log(
              "Something went wrong while updating a character: ",
              error
            );

            const updateBtn = document.getElementById("send-data");

            updateBtn.style.backgroundColor = "#FF0000";
          });
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newCharacterName = document.getElementById("char-name").value;
      const newCharacterOccupation =
        document.getElementById("char-occupation").value;
      const newCharacterWeapon = document.getElementById("char-weapon").value;
      const newCharacterCartoon =
        document.getElementById("char-cartoon").name === "on" ? true : false;

      charactersAPI
        .createOneRegister({
          name: newCharacterName,
          occupation: newCharacterOccupation,
          cartoon: newCharacterCartoon,
          weapon: newCharacterWeapon,
        })
        .then((result) => {
          console.log(result);
          const createBtn = document.getElementById("create-one");

          createBtn.style.backgroundColor = "#32CD32";
        })
        .catch((error) => {
          console.log(
            "Something went wrong while creating a character: ",
            error
          );
          const createBtn = document.getElementById("create-one");

          createBtn.style.backgroundColor = "#FF0000";
        });
    });
});
