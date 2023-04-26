const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .querySelector("#fetch-all")
    .addEventListener("click", async (event) => {
      console.log("fetch all clicked");
      const allCharaters = await charactersAPI.getFullList();
      console.log(allCharaters);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
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
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
