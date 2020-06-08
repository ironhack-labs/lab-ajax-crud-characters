import { buildManyCards, buildCard, buildNodeELement } from "./tools.js";
const charactersAPI = new APIHandler("http://localhost:8000/characters");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      //Get API data
      const charList = await charactersAPI.getFullList();
      //Get HTML elements
      const charContainer = document.querySelector("div.characters-container");
      const charInfo = document.querySelector("div.character-info");
      // Remove the original HTML card
      charContainer.removeChild(charInfo);
      // We iterate with API data and create a card for each
      charList.forEach((e) => {
        charContainer.appendChild(buildManyCards(e));
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      //This function, evaluates if the character container
      // has more than one element.
      //If true, remove current content, and is called again
      (async function buildInfo() {
        const inputVal = document.querySelector("div.operation input").value;
        const charCard = document.querySelector("div.character-info");
        if (document.querySelectorAll("div.character-info").length < 2) {
          const charInfo = await charactersAPI.getOneRegister(inputVal);
          charCard.innerHTML = buildCard(charInfo);
        } else {
          document
            .querySelector("div.characters-container")
            .removeChild(charCard);
          buildInfo();
        }
      })();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const inputVal = document.querySelector("div.delete input").value;
      charactersAPI
        .deleteOneRegister(inputVal)
        .then(
          () =>
            (document.getElementById("delete-one").style.backgroundColor =
              "red")
        )
        .catch((err) => {
          console.error("An error occurred while deleting a character:", err);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const form = document.querySelectorAll("#edit-character-form input");
      const id = form[0].value;
      const name = form[1].value;
      const occupation = form[2].value;
      const weapon = form[3].value;
      const cartoon = form[4].checked;
      charactersAPI
        .updateOneRegister(id, {
          name,
          occupation,
          weapon,
          cartoon,
        })
        .then(
          () =>
            (document.getElementById("update-data").style.backgroundColor =
              "green")
        );
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const form = document.querySelectorAll("#new-character-form input");
      const name = form[0].value;
      const occupation = form[1].value;
      const weapon = form[2].value;
      const cartoon = form[3].checked;
      charactersAPI
        .createOneRegister({
          name,
          occupation,
          weapon,
          cartoon,
        })
        .then(
          () =>
            (document.getElementById("create-data").style.backgroundColor =
              "green")
        );
    });
});
