const charactersAPI = new APIHandler('http://localhost:8000');

const $characters = document.querySelector('.characters-container');
const $fetchAllButton = document.getElementById("fetch-all");
const $fetchOneButton = document.getElementById("fetch-one");
const $deleteButton = document.getElementById("delete-one");
const $createButton = document.getElementById("create-one");
const $updateButton = document.getElementById("update-one");

function cleanCharacters() {
  while ($characters.lastElementChild) {
    $characters.removeChild($characters.lastElementChild);
  }
}

function createCharacterCard(character) {
  let newCharacter = document.createElement('div');
  newCharacter.className += "character-info";
  newCharacter.id = character.id;
  newCharacter.innerHTML = `<div class="id">ID: <span>${character.id}</span></div>
  <div class="name">Name: <span>${character.name}</span></div>
  <div class="occupation">Occupation: <span>${character.occupation}</span></div>
  <div class="weapon">Weapon: <span>${character.weapon}</span></div>
  <div class="cartoon">Cartoon? <span>${character.cartoon}</span></div>`;
  return newCharacter;
}

function renderCharacters(characters) {
  characters.forEach(character => {
    let newCharacter = createCharacterCard(character);
    $characters.appendChild(newCharacter);
  })
}

function removeCharacter(id) {
  const characterToDelete = document.getElementById(id);
  $characters.removeChild(characterToDelete);
}

function clearButtons() {
  $fetchAllButton.style.backgroundColor = null;
  $fetchOneButton.style.backgroundColor = null;
  $deleteButton.style.backgroundColor = null;
  $createButton.style.backgroundColor = null;
  $updateButton.style.backgroundColor = null;
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function(event) {
    charactersAPI
      .getFullList()
      .then(results => {
        const characters = results.data;
        console.log('Fetched all', characters);
        cleanCharacters();
        renderCharacters(characters);
        clearButtons()
        $fetchAllButton.style.backgroundColor = "green";
      })
      .catch(error => {
        console.log('Error fetching all', error);
        clearButtons()
        $fetchAllButton.style.backgroundColor = "red";
      });
  });

  document.getElementById('fetch-one').addEventListener('click', function(event) {
    const id = document.getElementsByName('character-id')[0].value;
    charactersAPI
      .getOneRegister(id)
      .then(result => {
        const character = result.data;
        console.log('Fetched one', character);
        cleanCharacters();
        renderCharacters([character]);
        clearButtons()
        $fetchOneButton.style.backgroundColor = "green";
      })
      .catch(error => {
        console.log('Error fetching one character', error);
        clearButtons()
        $fetchOneButton.style.backgroundColor = "red";
      });
  });

  document.getElementById('delete-one').addEventListener('click', function(event) {
    const id = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        console.log(`Deleted character id ${id}`);
        removeCharacter(id);
        clearButtons()
        $deleteButton.style.backgroundColor = "green";
      })
      .catch(error => {
        console.log('Error deleting one character', error);
        clearButtons()
        $deleteButton.style.backgroundColor = "red";
      });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const q = document.querySelector.bind(document);
    const id = q("#edit-character-form input[name='chr-id']").value;
    const name = q("#edit-character-form input[name='name']").value;
    const occupation = q("#edit-character-form input[name='occupation']").value;
    const weapon = q("#edit-character-form input[name='weapon']").value;
    const cartoon = q("#edit-character-form input[name='cartoon']").checked;
    const character = { name, occupation, weapon, cartoon };

    charactersAPI
      .updateOneRegister(id, character)
      .then(result => {
        const character = result.data;
        console.log('Edited character ', character);

        cleanCharacters();
        renderCharacters([character]);
        
        clearButtons()
        $updateButton.style.backgroundColor = "green";
      })
      .catch(error => {
        console.log('Error updating a character', error);
        $updateButton.style.backgroundColor = "red";
      });
  });

  document.getElementById('new-character-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const q = document.querySelector.bind(document);
    const name = q("#new-character-form input[name='name']").value;
    const occupation = q("#new-character-form input[name='occupation']").value;
    const weapon = q("#new-character-form input[name='weapon']").value;
    const cartoon = q("#new-character-form input[name='cartoon']").checked;
    const character = { name, occupation, weapon, cartoon };

    charactersAPI
      .createOneRegister(character)
      .then(result => {
        const character = result.data;
        console.log('Created character ', character);

        cleanCharacters();
        renderCharacters([character]);

        clearButtons()
        $createButton.style.backgroundColor = "green";
      })
      .catch(error => {
        console.log('Error fetching a character', error);
        $createButton.style.backgroundColor = "red";
      });
  });
});
