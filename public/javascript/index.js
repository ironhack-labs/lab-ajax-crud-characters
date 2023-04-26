const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async (event) => {
      const response = await charactersAPI.getFullList("characters");
      console.log(response);

      response.forEach((character) => {
        const characterInfo = ` <div class="character-info">
          <div class="id">Id: <span>${character.id}</span></div>
          <div class="name">Name: <span>${character.name}</span></div>
          <div class="occupation">Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a cartoon: <span>${character.cartoon}</span></div>
          <div class="weapon">Weapon: <span>${character.weapon}</span></div>
          </div>`;

        document.querySelector(".characters-container").innerHTML +=
          characterInfo;
      });
    });
});

document
  .getElementById("fetch-one")
  .addEventListener("click", async (event) => {
    const characterId = document.querySelector("[name=character-id]").value;
    const response = await charactersAPI.getOneRegister(
      "characters",
      characterId
    );
    const characterInfo = ` <div class="character-info">
        <div class="id">Id: <span>${response.id}</span></div>
        <div class="name">Name: <span>${response.name}</span></div>
        <div class="occupation">Occupation: <span>${response.occupation}</span></div>
        <div class="cartoon">Is a cartoon: <span>${response.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${response.weapon}</span></div>
        </div>`;

    document.querySelector(".characters-container").innerHTML = characterInfo;
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
