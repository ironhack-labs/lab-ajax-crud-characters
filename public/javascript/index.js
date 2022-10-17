const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  const createCharacterCard = (character) => {
    const charactersContainer = document.querySelector(".characters-container");
    const characterCard = document.createElement("div");
    charactersContainer.appendChild(characterCard);
    characterCard.classList.add("character-info");
    characterCard.innerHTML = `
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${
        character.cartoon ? "Yes" : "No"
      }</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div>
    `;
  };

  const changeButtonColor = (button, color) => {
    button.style.backgroundColor = color;
    setTimeout(() => {
      button.style.backgroundColor = "transparent";
    }, 2000);
  };

  document.getElementById("fetch-all").addEventListener("click", async () => {
    try {
      const response = await charactersAPI.getFullList();
      const fullList = response.data;
      fullList.forEach((character) => createCharacterCard(character));
    } catch (err) {
      console.log(err);
    }
  });

  document.getElementById("fetch-one").addEventListener("click", async () => {
    const characterId = document.getElementById("character-id").value;
    try {
      const response = await charactersAPI.getOneRegister(characterId);
      const character = response.data;
      createCharacterCard(character);
    } catch (err) {
      console.log(err);
    }
  });

  document
    .getElementById("delete-one")
    .addEventListener("click", async (event) => {
      const deleteButton = document.getElementById("delete-one");
      const characterId = document.getElementById("character-id-delete").value;
      try {
        const response = await charactersAPI.deleteOneRegister(characterId);
        const character = response.data;
        changeButtonColor(deleteButton, "green");
      } catch (err) {
        console.log(err);
        changeButtonColor(deleteButton, "red");
      }
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const buttonForm = document.querySelector("#edit-character-form button");
      const characterId = document.getElementById("edit-chr-id").value;
      const name = document.getElementById("edit-name").value;
      const occupation = document.getElementById("edit-occupation").value;
      const weapon = document.getElementById("edit-weapon").value;
      const cartoon = document.getElementById("edit-checkbox").checked;
      try {
        await charactersAPI.updateOneRegister(characterId, {
          name,
          occupation,
          weapon,
          cartoon,
        });
        changeButtonColor(buttonForm, "green");
      } catch {
        changeButtonColor(buttonForm, "red");
      }
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const occupation = document.getElementById("occupation").value;
      const weapon = document.getElementById("weapon").value;
      const cartoon = document.getElementById("checkbox").checked;
      try {
        const response = await charactersAPI.createOneRegister({
          name,
          occupation,
          weapon,
          cartoon,
        });
      } catch {
        console.log((err) => console.log(err));
      }
    });
});