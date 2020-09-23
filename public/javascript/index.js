import APIHandler from "./APIHandler.js";
const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then(function (apiResponse) {
          const data = apiResponse.data;
          let dataStr = "";
          data.forEach((character) => {
            dataStr += `
            <div class = "character-info">
            <div class = "name">Character Name: ${character.name}</div>
            <div class = "occupation">Character Occupation: ${character.occupation}</div> 
            <div class = "cartoon">Is a Cartoon ? ${character.cartoon}</div>
            <div class = "weapon">Character Weapon: ${character.weapon}</div>
            </div>`;
          });
          document.getElementById("characters-container").innerHTML = dataStr;
        })
        .catch(function (error) {
          console.log(error);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("search-id").value;
      charactersAPI
        .getOneRegister(id)
        .then(function (apiResponse) {
          const data = apiResponse.data;
          let dataStr = "";
          dataStr += `
            <div class = "character-info">
            <div class = "name">Character Name: ${data.name}</div>
            <div class = "occupation">Character Occupation: ${data.occupation}</div> 
            <div class = "cartoon">Is a Cartoon ? ${data.cartoon}</div>
            <div class = "weapon">Character Weapon: ${data.weapon}</div>
            </div>
          `;
          document.getElementById("characters-container").innerHTML = dataStr;
        })
        .catch(function (error) {
          console.log(error);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let idDelete = document.getElementById("character-id-delete").value;
      charactersAPI
        .deleteOneRegister(idDelete)
        .then((apiResponse) => {
          console.log(apiResponse);
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const name = document.getElementById("name-input").value;
      const occupation = document.getElementById("occupation-input").value;
      const weapon = document.getElementById("weapon-input").value;
      const cartoon = document.getElementById("cartoon-input").value;

      const newChar = {
        name,
        occupation,
        weapon,
        cartoon,
      };

      charactersAPI
        .createOneRegister(newChar)
        .then(() => {
          getFullList();
        })
        .catch((error) => {
          console.log(error);
        });
    });
});
