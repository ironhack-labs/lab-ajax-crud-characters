const charactersAPI = new APIHandler('http://localhost:8000');

const populateCharacters = () => {
  const characterContainer = document.querySelector('.characters-container');
  characterContainer.innerText = '';
  charactersAPI.getFullList()
    .then((res) => {
      res.map((character) => {
        const newDisplay = document.createElement('div');
        newDisplay.innerHTML = `
          <div class="character-info">
            <div class="id">Id: ${character.id}</div>
            <div class="name">Name: ${character.name}</div>
            <div class="occupation">Occupation: ${character.occupation}</div>
            <div class="cartoon">Cartoon: ${character.cartoon}</div>
            <div class="weapon">Weapons: ${character.weapon}</div>
          </div>
          `;
        characterContainer.appendChild(newDisplay);
      });
    })
    .catch(error => console.log(error));
};

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    populateCharacters();
  };

  document.getElementById('fetch-one').onclick = () => {
    const id = document.querySelector('#character-id-input').value;
    const characterContainer = document.querySelector('.characters-container');
    characterContainer.innerText = '';
    charactersAPI.getOneRegister(id)
      .then((res) => {
        const newDisplay = document.createElement('div');
        newDisplay.innerHTML = `
          <div class="character-info">
            <div class="id">Id: ${res.data.id}</div>
            <div class="name">Name: ${res.data.name}</div>
            <div class="occupation">Occupation: ${res.data.occupation}</div>
            <div class="cartoon">Cartoon: ${res.data.cartoon}</div>
            <div class="weapon">Weapons: ${res.data.weapon}</div>
          </div>
          `;
        characterContainer.appendChild(newDisplay);
      })
      .catch(err => console.log(err));
  };

  document.getElementById('delete-one').onclick = (e) => {
    e.preventDefault();
    const id = document.querySelector('#character-id-delete').value;
    charactersAPI.deleteOneRegister(id)
      .then((res) => {
        document.querySelector('#delete-one').style.backgroundColor = 'green';
        populateCharacters();
      })
      .catch((err) => {
        document.querySelector('#delete-one').style.backgroundColor = 'red';
        console.log(err);
      });
  };

  document.getElementById('edit-character-form').onsubmit = (e) => {
    e.preventDefault();
    const id = document.querySelector('#chr-id').value;
    charactersAPI.updateOneRegister(id)
      .then((res) => {
        populateCharacters();
        document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'green';
      })
      .catch((err) => {
        document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'red';
        console.log(err);
      });
  };

  document.getElementById('new-character-form').onsubmit = (e) => {
    e.preventDefault();
    charactersAPI.createOneRegister()
      .then((res) => {
        populateCharacters();
        document.querySelector('#new-character-form #send-data').style.backgroundColor = 'green';
      })
      .catch((err) => {
        document.querySelector('#new-character-form #send-data').style.backgroundColor = 'red';
        console.log(err);
      });
  };
});
