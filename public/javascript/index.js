const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      await charactersAPI
        .getFullList()
        .then((info) => {
          const characters = info.data;
          const characterBox = document.querySelector(".characters-container");
          characterBox.innerHTML = "";
          characters.forEach((character) => {
            characterBox.innerHTML += `
            <div class="character-info">
            <div class="id">Id: <span style="color:yellow">${character.id}</span></div>
                <div class="name">Character Name: <span style="color:yellow">${character.name}</span></div>
                <div class="occupation">Character Occupation: <span style="color:yellow">${character.occupation}</span></div>
                <div class="cartoon">Is a Cartoon? <span style="color:yellow">${character.cartoon}</span></div>
                <div class="weapon">Character Weapon: <span style="color:yellow">${character.weapon}</span></div>
            </div>`;
          });
        })
        .catch((err) => console.error(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async (event) => {
      await charactersAPI
        .getOneRegister(document.getElementsByName("character-id")[0].value)
        .then((response) => {
          const character = response.data;
          document.querySelector(".characters-container").innerHTML = `
        <div class="character-info">
            <div class="id">Id: <span>${character.id}</span></div>
            <div class="name">Character Name: <span>${character.name}</span></div>
            <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
            <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
        </div>
        `;
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async (event) => {
      await charactersAPI
        .deleteOneRegister(
          document.getElementsByName("character-id-delete")[0].value
        )
        .then(() => {
          document.querySelector("#delete-one").style.backgroundColor = "green";
        })
        .catch((err) => {
          document.querySelector("#delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector(
        '#new-character-form input[name="name"]'
      ).value;
      const occupation = document.querySelector(
        '#new-character-form input[name="occupation"]'
      ).value;
      const weapon = document.querySelector(
        '#new-character-form input[name="weapon"]'
      ).value;
      const cartoon = document.querySelector(
        '#new-character-form input[name="cartoon"]'
      ).checked;
      const characterData = { name, occupation, weapon, cartoon };
      charactersAPI.createOneRegister(characterData);
    });
});

document
  .getElementById("edit-character-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const id = document.getElementsByName("chr-id")[0].value;
    const name = document.querySelector(
      '#edit-character-form input[name="name"]'
    ).value;
    const occupation = document.querySelector(
      '#edit-character-form input[name="occupation"]'
    ).value;
    const weapon = document.querySelector(
      '#edit-character-form input[name="weapon"]'
    ).value;
    const cartoon = document.querySelector(
      '#edit-character-form input[name="cartoon"]'
    ).checked;
    const characterUpdatedData = { id, name, occupation, weapon, cartoon };
    charactersAPI.updateOneRegister(id, characterUpdatedData);
  });
