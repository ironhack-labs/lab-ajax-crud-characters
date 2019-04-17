const charactersAPI = new APIHandler("http://localhost:8000");
const charactersList = document.querySelector("#characters-list");
const template = document.querySelector("#character-card-template");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    axios.get("/characters").then(characters => {
      characters.data.forEach(character => {
        let card = template.content.cloneNode(true);
        card.querySelector(".character-id").innerText = character._id;
        card.querySelector(".character-name").innerText = character.name;
        card.querySelector(".character-occupation").innerText = character.occupation;
        card.querySelector(".character-is-cartoon").innerText = character.cartoon;
        card.querySelector(".character-weapon").innerText = character.weapon;
        charactersList.appendChild(card);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {};

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
