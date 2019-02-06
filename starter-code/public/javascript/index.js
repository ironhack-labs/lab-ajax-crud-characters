const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function(e) {
    e.preventDefault();

    charactersAPI.getFullList().then(characters => {
      clearAllCharacters();
      showAllCharaters(characters);
    });
  };

  document.getElementById('fetch-one').onclick = function(e) {
    e.preventDefault();
    const id = document.getElementById('input-char-one').value;
    charactersAPI.getOneRegister(id).then(character => {
      clearAllCharacters();
      showCharacter(character);
    });
  };

  document.getElementById('delete-one').onclick = function(e) {
    e.preventDefault();

    const id = document.getElementById('input-delete-one').value;
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        //FIXME:
        document.getElementById('delete-one').style.backgroundColor = 'green';
      })
      .catch(err => {
        console.log(err);
        document.getElementById('delete-one').style.backgroundColor = 'red';
      });
  };

  document.getElementById('new-character-form').onsubmit = function(e) {
    e.preventDefault();

    const charInfo = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occ').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').checked
    };

    charactersAPI
      .createOneRegister(charInfo)
      .then(character => {
        document.getElementById('send-data').style.backgroundColor = 'green';
      })
      .catch(err => {
        console.log(err);
        document.getElementById('send-data').style.backgroundColor = 'red';
      });
  };

  document.getElementById('edit-character-form').onsubmit = function(e) {
    e.preventDefault();

    const id = document.getElementById('edit-id').value;
    const charInfo = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occ').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').checked
    };

    charactersAPI
      .updateOneRegister(id, charInfo)
      .then(character => {
        console.log(character);
        document.getElementById('update-data').style.backgroundColor = 'green';
      })
      .catch(err => {
        console.log(err);
        document.getElementById('update-data').style.backgroundColor = 'red';
      });
  };
});

function clearAllCharacters() {
  document.getElementById('characters-container').innerHTML = '';
}

function showCharacter(character) {
  const newCharInfo = document.createElement('div');
  newCharInfo.className = 'character-info';
  newCharInfo.innerHTML = `<div>id: ${character.id}</div>
  <div>Name: ${character.name}</div>
  <div>Occupation: ${character.occupation}</div>
  <div>Is a Cartoon?: ${character.cartoon}</div>
  <div>Weapon: ${character.weapon}</div>`;

  document.getElementById('characters-container').appendChild(newCharInfo);
}

function showAllCharaters(characters) {
  for (let i = 0; i < characters.length; i++) {
    showCharacter(characters[i]);
  }
}
