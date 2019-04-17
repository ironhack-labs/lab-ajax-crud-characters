const charactersAPI = new APIHandler("http://localhost:8000");
const charactersList = document.querySelector("#characters-list");
const template = document.querySelector("#character-card-template");
const editForm = document.querySelector("#edit-character-form");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function(e) {
    e.preventDefault();
    axios.get("/characters").then(characters => {
      charactersList.innerHTML = "";
      characters.data.forEach(character => {
        let card = createCharacterCard(character);
        charactersList.appendChild(card);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function(e) {
    e.preventDefault();
    let characterId = document.querySelector("#search-input").value;
    axios.get(`/characters/${characterId}`).then(character => {
      charactersList.innerHTML = "";
      let card = createCharacterCard(character.data);
      charactersList.appendChild(card);
    });
  };

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault();
    let characterId = document.querySelector("#delete-input").value;
    axios
      .delete(`/characters/${characterId}`)
      .then(character => {
        e.target.style.backgroundColor = "green";
        e.target.style.color = "white";
        characterId.innerHTML = '';
        document.getElementById("fetch-all").click();
      })
      .catch(err => {
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
      });
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let inputs = e.target.querySelectorAll(
      'input[type="text"], input[type="hidden"]'
    );

    let _id = inputs[0];
    let name = inputs[1];
    let occupation = inputs[2];
    let weapon = inputs[3];
    let cartoon = e.target.querySelector(
      'input[type="checkbox"]'
    );

    let newCharacterData = {
      name: name.value,
      occupation: occupation.value,
      weapon: weapon.value,
      cartoon: cartoon.checked,
    };
    
    axios.put(`/characters/${_id.value}`, newCharacterData).then(() => {
      _id.value = '';
      name.value = '';
      occupation.value = '';
      weapon.value = '';
      cartoon.checked = false;
      document.getElementById("fetch-all").click();
    });
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let inputs = e.target.querySelectorAll(
      'input[type="text"]'
    );

    let name = inputs[0];
    let occupation = inputs[1];
    let weapon = inputs[2];
    let cartoon = e.target.querySelector(
      'input[type="checkbox"]'
    );

    let newCharacterData = {
      name: name.value,
      occupation: occupation.value,
      weapon: weapon.value,
      cartoon: cartoon.checked,
    };
    
    axios.post('/characters/', newCharacterData).then(() => {
      name.value = '';
      occupation.value = '';
      weapon.value = '';
      cartoon.checked = false;
      document.getElementById("fetch-all").click();
    });
  };
});

function editCharacter(e) {
  e.preventDefault();
  let characterCard = e.target.parentNode;
  let characterId = characterCard.querySelector(".character-id").innerHTML;

  axios.get(`/characters/${characterId}`).then(character => {
    let { _id, name, occupation, weapon, cartoon } = character.data;
    let oldData = { _id, name, occupation, weapon, cartoon };
    let inputs = editForm.querySelectorAll(
      'input[type="text"], input[type="hidden"]'
    );
    for (let input of inputs) {
      console.log(input, oldData[input.getAttribute("name")]);
      input.value = oldData[input.getAttribute("name")];
    }
    editForm.querySelector('input[type="checkbox"]').checked = cartoon;
    console.log(inputs);
  });
}

function createCharacterCard(character) {
  let card = template.content.cloneNode(true);
  card.querySelector(".character-id").innerText = character._id;
  card.querySelector(".character-name").innerText = character.name;
  card.querySelector(".character-occupation").innerText = character.occupation;
  card.querySelector(".character-is-cartoon").innerText = character.cartoon;
  card.querySelector(".character-weapon").innerText = character.weapon;
  card.querySelector(".character-edit-btn").onclick = editCharacter;
  return card;
}
