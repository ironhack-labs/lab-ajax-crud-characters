const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try{
      characters = await charactersAPI.getFullList();
      renderCharacters(characters);    
      document.getElementById('fetch-all').classList.add('success');
      setTimeout(() => {
        document.getElementById('fetch-all').classList.remove('success');
      }, 3000);
    } catch (e) {
      console.log(e);
    }
  });
});

document.getElementById('fetch-one').addEventListener('click', async function (event) {
  const id = document.querySelector('.operation input').value; 
  console.log(id)
  try {
    const character = await charactersAPI.getOneRegister(id);
    if (!character) {
      alert(`you = dumb dumb id: ${id} doesn't exist!`);
      document.getElementById('fetch-one').classList.add('fail');
      setTimeout(() => {
        document.getElementById('fetch-one').classList.remove('fail');
      }, 3000);
    } else {
      document.getElementById('fetch-one').classList.add('success');
      setTimeout(() => {
        document.getElementById('fetch-one').classList.remove('success');
      }, 3000);
      renderCharacter(character);
      document.querySelector('.operation input').value = ''; 
    }
  } catch (e) {
    console.log(e)
  }
});

document.getElementById('delete-one').addEventListener('click', async function (event) {
  const id = document.querySelector('.operation.delete input').value; 
  try {
    const result = await charactersAPI.deleteOneRegister(id);
    if(result == 'Error: Request failed with status code 404') {
      alert(`you can't delete a character that does not exist! ${id} is a ghost in the machine`);
      document.getElementById('delete-one').classList.add('fail');
      setTimeout(() => {
        document.getElementById('delete-one').classList.remove('fail');
      }, 3000);
    } else {
      document.getElementById('delete-one').classList.add('success');
      setTimeout(() => {
        document.getElementById('delete-one').classList.remove('success');
      }, 3000);
      document.querySelector('.operation.delete input').value = '';
    }
  } catch (e) {
    console.log(e)
  }
});

document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    const inputs = document.getElementById('edit-character-form');
    const id = +inputs[0].value;
    let updatedName = '';
    let updatedOccupation = '';
    let updatedWeapon = '';
    let updatedCartoon = '';
    const originalCharacter = await charactersAPI.getOneRegister(id);
    if(!originalCharacter) {
      alert(`you = dumb dumb id: ${id} doesn't exist!`);
      document.getElementById('send-update-character-data').classList.add('fail');
      setTimeout(() => {
        document.getElementById('send-update-character-data').classList.remove('fail');
      }, 3000);
    } else {
      const {name, occupation, weapon, cartoon} = originalCharacter;
      inputs[1].value ? updatedName = inputs[1].value : updatedName = name;
      inputs[2].value ? updatedOccupation = inputs[2].value : updatedOccupation = occupation;
      inputs[3].value ? updatedWeapon = inputs[3].value : updatedWeapon = weapon;
      inputs[4].checked ? updatedCartoon = inputs[4].checked : updatedCartoon = cartoon;
      const newCharacter = {
          name:updatedName,
          occupation:updatedOccupation,
          weapon:updatedWeapon,
          cartoon:updatedCartoon,
          id:id
        };
      const updatedCharacter = await charactersAPI.updateOneRegister(id, newCharacter);
      renderCharacter(updatedCharacter);
      document.getElementById('send-update-character-data').classList.add('success');
      setTimeout(() => {
        document.getElementById('send-update-character-data').classList.remove('success');
      }, 3000);
      document.getElementById('edit-character-form')[0].value = '';
      document.getElementById('edit-character-form')[1].value = '';
      document.getElementById('edit-character-form')[2].value = '';
      document.getElementById('edit-character-form')[3].value = '';
      document.getElementById('edit-character-form')[4].checked = false;
    }
  } catch (e) {
    console.log('error', e);
  }
});

    //const character = await charactersAPI.

document.getElementById('new-character-form').addEventListener('submit', async function (event) {
  event.preventDefault();
  try {
    const inputs = document.getElementById('new-character-form');
    const name = inputs[0].value;
    const occupation = inputs[1].value;
    const weapon = inputs[2].value;
    const cartoon = inputs[3].checked;
    
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };
    const createdCharacter = charactersAPI.createOneRegister(newCharacter);
    renderCharacter(createdCharacter);
    document.getElementById('send-new-character-data').classList.add('success');
    setTimeout(() => {
        document.getElementById('send-new-character-data').classList.remove('success');
      }, 3000);
    console.log(document.getElementById('send-new-character-data'))
    document.getElementById('new-character-form')[0].value = '';
    document.getElementById('new-character-form')[1].value = '';
    document.getElementById('new-character-form')[2].value = '';
    document.getElementById('new-character-form')[3].checked = false;
  } catch (e) {
    console.log(e);
  }
});


const renderCharacters = (characterInput) => {
    // if (characterInput.length === 0) return characterNotFound();

    const characters = document.querySelector('.characters-container');
    characters.innerHTML = '';
    characterInput.forEach(character => {
      characters.innerHTML += `
          <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
      `;
    });
};

const renderCharacter = (characterInput) => {
  const {name, occupation, weapon, cartoon} = characterInput;
  const characters = document.querySelector('.characters-container');
  characters.innerHTML = `
          <div class="character-info">
          <div class="name">Character Name: ${name}</div>
          <div class="occupation">Character Occupation: ${occupation}</div>
          <div class="cartoon">Is a Cartoon? ${cartoon}</div>
          <div class="weapon">Character Weapon: ${weapon}</div>
        </div>
      `;
};


// const characterNotFound = (axiosMethod = '') => {
//     const charactersContainer = document.querySelector('.characters-container');
//     charactersContainer.innerHTML = '';

//     const notFound = charactersContainer.innerHTML += `<h2>Character not found</h2>`;
//     const notCreated = charactersContainer.innerHTML += `<h2>Not created</h2>`

//     return axiosMethod === '' ? notFound : notCreated;
// }

