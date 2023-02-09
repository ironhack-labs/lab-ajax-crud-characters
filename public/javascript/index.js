const charactersAPI = new APIHandler("http://localhost:8000");

const createCharacterDiv = (response) => {
  let data = response.data instanceof Array ? response.data : [response.data];

  const charactersContainer = document.querySelector(".characters-container");
  charactersContainer.innerHTML = "";
  data.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character-info");
    characterDiv.innerHTML = `
            <div class="name">${character.name}</div>
            <div class="occupation">${character.occupation}</div>
            <div class="cartoon">${character.cartoon}</div>
            <div class="weapon">${character.weapon}</div>
          `;
    charactersContainer.appendChild(characterDiv);
  });
};

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", (event) => {
    charactersAPI
      .getFullList()
      .then((response) => createCharacterDiv(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("fetch-one").addEventListener("click", (event) => {
    const characterId = document.querySelector("input[name='character-id']").value;

    charactersAPI
      .getOneRegister(characterId)
      .then((response) => createCharacterDiv(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("delete-one").addEventListener("click", (event) => {
    const characterId = document.querySelector("input[name='character-id-delete']").value;

    charactersAPI
      .deleteOneRegister(characterId)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("edit-character-form").addEventListener("submit", (event) => {
    const characterId = document.querySelector("#edit-character-form input[name='chr-id']").value;
    const character = {
      name: document.querySelector("#edit-character-form input[name='name']").value,
      occupation: document.querySelector("#edit-character-form input[name='occupation']").value,
      weapon: document.querySelector("#edit-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#edit-character-form input[name='cartoon']").checked,
    };

    charactersAPI
      .updateOneRegister(characterId, character)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("new-character-form").addEventListener("submit", (event) => {
    const character = {
      name: document.querySelector("#new-character-form input[name='name']").value,
      occupation: document.querySelector("#new-character-form input[name='occupation']").value,
      weapon: document.querySelector("#new-character-form input[name='weapon']").value,
      cartoon: document.querySelector("#new-character-form input[name='cartoon']").checked,
    };

    charactersAPI
      .createOneRegister(character)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
});
