const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", (event) => {
    charactersAPI
      .getFullList()
      .then((response) => {
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
      })
      .catch((err) => console.log(err));
  });

  document.getElementById("fetch-one").addEventListener("click", (event) => {
    const characterId = document.querySelector("input[name='character-id']").value;

    charactersAPI
      .getOneRegister(characterId)
      .then((response) => {
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
      })
      .catch((err) => console.log(err));
  });

  document.getElementById("delete-one").addEventListener("click", (event) => {
    charactersAPI
      .deleteOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("edit-character-form").addEventListener("submit", (event) => {
    charactersAPI
      .updateOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("new-character-form").addEventListener("submit", (event) => {
    charactersAPI
      .createOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
});
