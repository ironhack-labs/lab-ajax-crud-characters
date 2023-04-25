const charactersAPI = new APIHandler("http://localhost:5500");

//Template for fetch-all and fetch-one
const characterCard = function (characterData) {
  document.querySelector(".character-container").innerHTML += `
  <div class="character-info">
      <div class="id">Id: <span>${characterData.id}</span></div>
      <div class="name">Character Name: <span>${characterData.name}</span></div>
      <div class="occupation">Character Occupation: <span>${characterData.occupation}</span></div>
      <div class="cartoon">Is a Cartoon? <span>${characterData.cartoon}</span></div>
      <div class="weapon">Character Weapon: <span>${characterData.weapon}</span></div>
  </div>
  `;
};

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          const characters = response.data;
          console.log(characters);
          document.querySelector(".characters-container").innerHTML = "";
          characters.forEach((character) => {
            document.querySelector(".character-container").innerHTML =
              characterCard(character);
          });
        })
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

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
