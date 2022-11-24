const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((response) => {
        response.data.forEach((element) => {
          charCard(element);
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector("[name=character-id]").value;
      charactersAPI
        .getOneRegister(id)
        .then((response) => {
          charCard(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector("[name=character-id-delete]").value;
      charactersAPI
        .deleteOneRegister(id)
        .then((response) => {
          document.getElementById("delete-one").style.background = "green";
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("delete-one").style.background = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});

function charCard(element) {
  const charactersContainer = document.querySelector(".characters-container");
  const characterInfo = document.createElement("div");
  const id = document.createElement("div");
  const charName = document.createElement("div");
  const occupation = document.createElement("div");
  const isACartoon = document.createElement("div");
  const weapon = document.createElement("div");

  characterInfo.className = "character-info";

  id.textContent = "id: " + element.id;
  charName.textContent = "Name: " + element.name;
  occupation.textContent = "Occupation: " + element.occupation;
  isACartoon.textContent = "is a cartoon: " + element.cartoon;
  weapon.textContent = "Weapon: " + element.weapon;
  characterInfo.append(id, charName, occupation, isACartoon, weapon);
  charactersContainer.appendChild(characterInfo);
}
