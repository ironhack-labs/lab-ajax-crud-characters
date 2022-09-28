const charactersAPI = new APIHandler("http://localhost:8000");
const characterContainer = document.getElementById("character-container");
const blankContainer = document.getElementById("blank-container");
const idInput = document.getElementsByName("character-id")[0];
const idInputDelete = document.getElementsByName("character-id-delete")[0];
const deleteButton = document.getElementById("delete-one");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      console.log("test2");
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
      if (idInputDelete.value) {
        await charactersAPI.deleteOneRegister(idInputDelete.value);        
        deleteButton.style.backgroundColor = "green";
      } else deleteButton.style.backgroundColor = "red";
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const newCharacter = 
    });
});

function addCharacterCard(character) {
  blankContainer.classList.add("hidden");
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
