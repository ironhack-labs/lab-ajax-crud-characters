const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .querySelector("#fetch-all")
    .addEventListener("click", async (event) => {
      const allCharacters = await charactersAPI.getFullList();
      const divContainer = document.querySelector(".characters-container");

      for (const character of allCharacters) {
        const divInfo = document.createElement("div");
        divInfo.setAttribute("class", "character-info");

        const divId = document.createElement("div");
        divId.innerHTML = character.id;

        const divName = document.createElement("div");
        divName.innerHTML = character.name;

        const divOccupation = document.createElement("div");
        divOccupation.innerHTML = character.occupation;

        const divCartoon = document.createElement("div");
        divCartoon.innerHTML = character.cartoon;

        const divWeapon = document.createElement("div");
        divWeapon.innerHTML = character.weapon;

        divInfo.appendChild(divId);
        divInfo.appendChild(divName);
        divInfo.appendChild(divOccupation);
        divInfo.appendChild(divCartoon);
        divInfo.appendChild(divWeapon);

        divContainer.appendChild(divInfo);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function () {
      const id = document.querySelector(".operation input").value;
      const character = await charactersAPI.getOneRegister(id);

      document.querySelector(
        ".character-info .name"
      ).innerHTML = `Character Name: ${character.name}`;
      document.querySelector(
        ".character-info .occupation"
      ).innerHTML = `Character occupation: ${character.occupation}`;
      document.querySelector(
        ".character-info .cartoon"
      ).innerHTML = `Is a cartoon?: ${character.cartoon}`;
      document.querySelector(
        ".character-info .weapon"
      ).innerHTML = `Character weapon: ${character.weapon}`;
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function () {
      const id = document.querySelector(".operation.delete input").value;
      await charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const formProps = Object.fromEntries(formData);

      if (formProps.cartoon === "on") {
        formProps.cartoon = true;
      } else {
        delete formProps.cartoon;
      }

      if (formProps.name === "") {
        delete formProps.name;
      }
      if (formProps.occupation === "") {
        delete formProps.occupation;
      }
      if (formProps.weapon === "") {
        delete formProps.weapon;
      }

      const id = formProps.id;
      delete formProps.id;
      await charactersAPI.updateOneRegister(id, formProps);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(event.target);
      const formProps = Object.fromEntries(formData);
      if (formProps.cartoon === "on") {
        formProps.cartoon = true;
      }

      await charactersAPI.createOneRegister(formProps);
    });
});
