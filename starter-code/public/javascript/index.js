const charactersAPI = new APIHandler("http://localhost:8000");
const charactersList = document.querySelector("#characters-list");
const template = document.querySelector("#character-card-template");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function(e) {
    e.preventDefault();
    axios.get("/characters").then(characters => {
      charactersList.innerHTML = '';
      characters.data.forEach(character => {
        let card = createCharacterCard(character);
        charactersList.appendChild(card);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function(e) {
    e.preventDefault();
    let characterId = document.querySelector('#search-input').value;
    axios.get(`/characters/${characterId}`)
    .then( character => {
      charactersList.innerHTML = '';
      let card = createCharacterCard(character.data);
      charactersList.appendChild(card);
    })
  };

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault();
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});

function createCharacterCard(character) {
  let card = template.content.cloneNode(true);
  card.querySelector(".character-id").innerText = character._id;
  card.querySelector(".character-name").innerText = character.name;
  card.querySelector(".character-occupation").innerText = character.occupation;
  card.querySelector(".character-is-cartoon").innerText = character.cartoon;
  card.querySelector(".character-weapon").innerText = character.weapon;

  return card;
}
