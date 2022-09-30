const charactersAPI = new APIHandler('http://localhost:8000');

// Putting this outside to display it when fetch-one
const editCharacterForm = document.getElementById('edit-character-form');

function deleteCharacterCards() {
  const cards = document.querySelectorAll('.character-info');
  cards.forEach((card) => card.remove());
}

function displayCharacters(character) {
  const charactersContainer = document.getElementsByClassName('characters-container')[0];
  const characterCard = document.createElement('div');
  characterCard.className = 'character-info';
  characterCard.innerHTML = `
        <div class="name">ID: <span>${character.id}</span></div>
        <div class="name">Character Name: <span>${character.name}</span></div>
        <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
        <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
        </div>`;
  charactersContainer.appendChild(characterCard);
}

function buttonFlash(button, color) {
  button.style.backgroundColor = color;
  setTimeout(() => {
    button.style.backgroundColor = 'transparent';
  }, 300);
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async () => {
    deleteCharacterCards();
    const fetchAllButton = document.getElementById('fetch-all');

    const responseFromApi = await charactersAPI.getFullList();
    const charactersFromApi = responseFromApi.data;
    try {
      charactersFromApi.forEach((character) => {
        displayCharacters(character);
        buttonFlash(fetchAllButton, 'green');
      });
    } catch (err) {
      buttonFlash(fetchAllButton, 'red');
      console.log(err);
    }
  });

  document.getElementById('fetch-one').addEventListener('click', async () => {
    const fetchOneInputValue = document.getElementsByName('character-id')[0].value;
    const fetchOneButton = document.getElementById('fetch-one');
    if (!fetchOneInputValue) {
      buttonFlash(fetchOneButton, 'red');
    } else if (fetchOneInputValue) {
      try {
        const responseFromApi = await charactersAPI.getOneRegister(fetchOneInputValue);
        const character = responseFromApi.data;
        if (character) deleteCharacterCards();
        displayCharacters(character);
        // Displaying the FETCH ONE also in the edit form
        editCharacterForm[0].value = character.id;
        editCharacterForm[1].value = character.name;
        editCharacterForm[2].value = character.occupation;
        editCharacterForm[3].value = character.weapon;
        editCharacterForm[4].checked = character.cartoon;
      } catch (err) {
        console.log(err);
        buttonFlash(fetchOneButton, 'red');
      }
    }
  });

  document.getElementById('delete-one').addEventListener('click', async () => {
    const deleteOneInputValue = document.getElementsByName('character-id-delete')[0].value;
    const deleteOneButton = document.getElementById('delete-one');
    try {
      if (deleteOneInputValue) {
        await charactersAPI.deleteOneRegister(deleteOneInputValue).then((res) => console.log(res));
        buttonFlash(deleteOneButton, 'green');
      } else if (!deleteOneInputValue) {
        buttonFlash(deleteOneButton, 'red');
      }
    } catch (err) {
      console.log(err);
      buttonFlash(deleteOneButton, 'red');
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const editOneButton = document.querySelector('#edit-character-form button');
    const editCharacterDataObject = {
      id: editCharacterForm[0].value,
      name: editCharacterForm[1].value,
      occupation: editCharacterForm[2].value,
      weapon: editCharacterForm[3].value,
      cartoon: editCharacterForm[4].checked,
    };
    try {
      charactersAPI.updateOneRegister(editCharacterForm[0].value, editCharacterDataObject);
      buttonFlash(editOneButton, 'green');
    } catch (err) {
      buttonFlash(editOneButton, 'red');
      console.log(err);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const newOneButton = document.querySelector('#new-character-form button');
    const newCharacter = document.getElementById('new-character-form');
    const newCharacterDataObject = {
      name: newCharacter[0].value,
      occupation: newCharacter[1].value,
      weapon: newCharacter[2].value,
      cartoon: newCharacter[3].checked,
    };
    try {
      charactersAPI.createOneRegister(newCharacterDataObject);
      buttonFlash(newOneButton, 'green');
    } catch (err) {
      buttonFlash(newOneButton, 'red');
      console.log(err);
    }
  });
});
