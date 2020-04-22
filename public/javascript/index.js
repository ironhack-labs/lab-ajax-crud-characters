const charactersAPI = new APIHandler('http://localhost:8000');
const cardsContainer = document.getElementById('cards-container');

// --------------------------------------
// Functions

function displayAll(characters) {
  let str = "";
  characters.forEach(character => {
    str += `<div class="character-info">
          <p>Id: ${character.id}</p>
          <p>Name: ${character.name}</p>
          <p>Occupation: ${character.occupation}</p>
          <p>Is a cartoon? ${character.cartoon}</p>
          <p>Weapon: ${character.weapon}</p>
          </div>`;
  });
  cardsContainer.innerHTML = str;
}

function displayOne(character) {
  character = `<div class="character-info">
          <p>Id: ${character.id}</p>
          <p>Name: ${character.name}</p>
          <p>Occupation: ${character.occupation}</p>
          <p>Is a cartoon? ${character.cartoon}</p>
          <p>Weapon: ${character.weapon}</p>
          </div>`;
  cardsContainer.innerHTML = character;
}

function greenButton() {
  const button = document.getElementById('send-data');
  button.style.backgroundColor = "lime";
}

function redButton() {
  const button = document.getElementById('send-data');
  button.style.backgroundColor = "crimson";
}

// --------------------------------------
// Events 

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI
      .getFullList()
      .then(result => displayAll(result.data))
      .catch(error => console.log(error))
  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById("fetch-character").value;
    charactersAPI
      .getOneRegister(id)
      .then(result => displayOne(result.data))
      .catch(error => console.log(error))
  });

  document.getElementById('delete-one').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.getElementById("delete-character").value;
    const deleteButton = document.getElementById('delete-one');
    charactersAPI.deleteOneRegister(id)
      .then(result => {
        deleteButton.style.backgroundColor = "lime"
      })
      .catch(error => {
        deleteButton.style.backgroundColor = "crimson"
        console.log(error);
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const id = document.querySelector("#edit-character-form input[name='chr-id']").value;
    const character = {
      name: document.querySelector('#edit-character-form input[name="name"]').value,
      occupation: document.querySelector('#edit-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#edit-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#edit-character-form input[name="cartoon"]').checked,
    }
    charactersAPI.updateOneRegister(id, character)
      .then(result => {
        createButton.style.backgroundColor = "lime";
      })
      .catch(error => {
        createButton.style.backgroundColor = "crimson";
        console.log(error);
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const character = {
      name: document.querySelector('#new-character-form input[name="name"]').value,
      occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form input[name="cartoon"]').checked,
    }
    const createButton = document.getElementById('create-button');
    charactersAPI.createOneRegister(character)
      .then(result => {
        createButton.style.backgroundColor = "lime";
      })
      .catch(error => {
        createButton.style.backgroundColor = "crimson";
        console.log(error);
      })

  });
});