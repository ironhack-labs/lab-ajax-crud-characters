const charactersAPI = new APIHandler("http://localhost:8000");
const characterContainer = document.getElementById("character-container");
const idInput = document.getElementsByName("character-id")[0];
const idInputDelete = document.getElementsByName("character-id-delete")[0];
const deleteButton = document.getElementById("delete-one");
const newCharacterName = document.getElementsByName("name")[0];
const newCharacterOccupation = document.getElementsByName("occupation")[0];
const newCharacterWeapon = document.getElementsByName("weapon")[0];
const newCharacterCartoon = document.getElementsByName("cartoon")[0];
const editCharacterId = document.getElementsByName("chr-id")[0];
const editCharacterName = document.getElementsByName("name")[1];
const editCharacterOccupation = document.getElementsByName("occupation")[1];
const editCharacterWeapon = document.getElementsByName("weapon")[1];
const editCharacterCartoon = document.getElementsByName("cartoon")[1];
const editButton = document.getElementById("send-data-edit");
const newButton = document.getElementById("send-data-new");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      clearContainer();
      const allCharacters = await charactersAPI.getFullList();
      console.log(allCharacters);
      allCharacters.forEach((elem) => {
        addCharacterCard(elem);
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      if (idInput.value) {
        clearContainer();
        const foundCharacter = await charactersAPI.getOneRegister(
          idInput.value
        );
        console.log(foundCharacter);
        addCharacterCard(foundCharacter);
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      try {
        if (idInputDelete.value) {
          await charactersAPI.deleteOneRegister(idInputDelete.value);
          deleteButton.style.backgroundColor = "green";
        }
      } catch (err) {
        console.error(err);
        deleteButton.style.backgroundColor = "red";
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        let editedCharacter = {};
        if (editCharacterId) {
          const existingCharacter = await charactersAPI.getOneRegister(
            editCharacterId.value
          );
          console.log(existingCharacter);
          let editedCharacter = {};
          editedCharacter.name = editCharacterName.value
            ? editCharacterName.value
            : existingCharacter.name;
          editedCharacter.occupation = editCharacterOccupation.value
            ? editCharacterOccupation.value
            : existingCharacter.occupation;
          editedCharacter.weapon = editCharacterWeapon.value
            ? editCharacterWeapon.value
            : existingCharacter.weapon;
          editedCharacter.cartoon = editCharacterCartoon.checked;
          console.log(editedCharacter);
          await charactersAPI.updateOneRegister(
            editedCharacter,
            editCharacterId.value
          );
        }
        editButton.style.backgroundColor = "green";
      } catch (err) {
        console.error(err);
        editButton.style.backgroundColor = "red";
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      try {
        const newCharacter = {
          name: newCharacterName.value,
          occupation: newCharacterOccupation.value,
          weapon: newCharacterWeapon.value,
          cartoon: newCharacterCartoon.checked,
        };
        await charactersAPI.createOneRegister(newCharacter);
        newButton.style.backgroundColor = "green";
      } catch (err) {
        console.error(err);
        newButton.style.backgroundColor = "red";
      }
    });
});

function addCharacterCard(character) {
  const characterCard = document.createElement("div");
  characterCard.classList.add("character-info");
  characterCard.classList.add("character-info-filled-out");
  characterContainer.appendChild(characterCard);
  const elementId = document.createElement("div");
  elementId.innerHTML = `Id: ${character.id}`;
  characterCard.appendChild(elementId);
  const elementName = document.createElement("div");
  elementName.innerHTML = `Name: ${character.name}`;
  characterCard.appendChild(elementName);
  const elementOccupation = document.createElement("div");
  elementOccupation.innerHTML = `Occupation: ${character.occupation}`;
  characterCard.appendChild(elementOccupation);
  const elementCartoon = document.createElement("div");
  elementCartoon.innerHTML = `Is a cartoon? ${character.cartoon}`;
  characterCard.appendChild(elementCartoon);
  const elementWeapon = document.createElement("div");
  elementWeapon.innerHTML = `Weapon: ${character.weapon}`;
  characterCard.appendChild(elementWeapon);
}

function clearContainer() {
  while (characterContainer.firstChild) {
    characterContainer.removeChild(characterContainer.lastChild);
  }
}
