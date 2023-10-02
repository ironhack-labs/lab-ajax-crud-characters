const charactersAPI = new APIHandler("http://localhost:8000");

const divCharactersContainer = document.querySelector(".characters-container");

function listCharactersContainer(id, name, occupation, cartoon, weapon) {
  const divCharactersInfo = document.createElement("div");
  const divId = document.createElement("div");
  const divName = document.createElement("div");
  const divOccupation = document.createElement("div");
  const divCartoon = document.createElement("div");
  const divWeapon = document.createElement("div");

  divCharactersInfo.className = "character-info";
  divId.className = "id";
  divName.className = "name";
  divOccupation.className = "occupation";
  divCartoon.className = "cartoon";
  divWeapon.className = "weapon";

  divId.innerHTML = "Id: ";
  divName.innerHTML = "Name: ";
  divOccupation.innerHTML = "Occupation: ";
  divCartoon.innerHTML = "Is a Cartoon?: ";
  divWeapon.innerHTML = "Weapon: ";

  const spanId = document.createElement("span");
  const spanName = document.createElement("span");
  const spanOccupation = document.createElement("span");
  const spanCartoon = document.createElement("span");
  const spanWeapon = document.createElement("span");

  spanId.innerHTML = id;
  spanName.innerHTML = name;
  spanOccupation.innerHTML = occupation;
  spanCartoon.innerHTML = cartoon;
  spanWeapon.innerHTML = weapon;

  divId.appendChild(spanId);
  divName.appendChild(spanName);
  divOccupation.appendChild(spanOccupation);
  divCartoon.appendChild(spanCartoon);
  divWeapon.appendChild(spanWeapon);

  divCharactersInfo.appendChild(divId);
  divCharactersInfo.appendChild(divName);
  divCharactersInfo.appendChild(divOccupation);
  divCharactersInfo.appendChild(divCartoon);
  divCharactersInfo.appendChild(divWeapon);

  divCharactersContainer.appendChild(divCharactersInfo);
}

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const allCharacters = await charactersAPI.getFullList();
        console.log("All characters:", allCharacters);
        divCharactersContainer.innerHTML = " ";
        allCharacters.forEach((character) => {
          const { id, name, occupation, cartoon, weapon } = character;
          listCharactersContainer(id, name, occupation, cartoon, weapon);
        });
      } catch (error) {
        console.log("Error fetching characters:", error);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const characterId = document.getElementsByName("character-id")[0].value;
      try {
        const character = await charactersAPI.getOneRegister(characterId);
        console.log("Character:", character);
        const {id, name, occupation, cartoon, weapon} = character;
        divCharactersContainer.innerHTML = " ";
        listCharactersContainer(id, name, occupation, cartoon, weapon);
        document.getElementById("fetch-one").style.backgroundColor = "green";
      } catch (error) {
        console.log("Error fetching character:", error);
        document.getElementById("fetch-one").style.backgroundColor = "red";
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      try {
        const id = document.getElementsByName("character-id-delete")[0].value;
        await charactersAPI.deleteOneRegister(id);
        event.target.style.backgroundColor = "green";
      } catch (error) {
        console.log("Error deleting character:", error);
        event.target.style.backgroundColor = "red";
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      const formData = new FormData(event.target);
      const id = formData.get("chr-id");
      const data = {
        name: formData.get("name"),
        occupation: formData.get("occupation"),
        weapon: formData.get("weapon"),
        cartoon: formData.get("cartoon") === "on",
      };
      try {
        await charactersAPI.updateOneRegister(id, data);
        document.getElementById("edit-data").style.backgroundColor = "green";
      } catch (error) {
        console.log("Error updating character:", error);
        document.getElementById("edit-data").style.backgroundColor = "red";
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        occupation: formData.get("occupation"),
        weapon: formData.get("weapon"),
        cartoon: formData.get("cartoon") === "on",
      };
      try {
        await charactersAPI.createOneRegister(data);
        document.getElementById("send-data").style.backgroundColor = "green";
      } catch (error) {
        console.log("Error creating character:", error);
        document.getElementById("send-data").style.backgroundColor = "red";
      }
    });
});
