// const APIHandler = require('./APIHandler');
// const charactersAPI = new APIHandler('http://localhost:8000');

// charactersAPI.getFullList().then(item => console.log(item));
const scriptLoad = console.log('Script loaded');

const updateOne = character => {
  console.log(character);
  const charactersContainer = document.querySelector('.characters-container');

  charactersContainer.innerHTML = '';

  const characterInfo = document.createElement('div');
  characterInfo.classList.add('character-info');

  const idElem = document.createElement('div');
  idElem.classList.add('id');
  idElem.textContent = `Id: ${character.id}`;
  characterInfo.appendChild(idElem);

  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  nameElem.textContent = `Name: ${character.name}`;
  characterInfo.appendChild(nameElem);

  const occupationElem = document.createElement('div');
  occupationElem.classList.add('occupation');
  occupationElem.textContent = `Occupation: ${character.occupation}`;
  characterInfo.appendChild(occupationElem);

  const cartoonElem = document.createElement('div');
  cartoonElem.classList.add('cartoon');
  cartoonElem.textContent = `Is a Cartoon?: ${character.cartoon}`;
  characterInfo.appendChild(cartoonElem);

  const weaponElem = document.createElement('div');
  weaponElem.classList.add('weapon');
  weaponElem.textContent = `Weapon: ${character.weapon}`;
  characterInfo.appendChild(weaponElem);

  charactersContainer.appendChild(characterInfo);
};

const updateMany = responseData => {
  console.log(responseData);
  const charactersContainer = document.querySelector('.characters-container');

  charactersContainer.innerHTML = '';

  responseData.forEach(character => {
    const characterInfo = document.createElement('div');
    characterInfo.classList.add('character-info');

    const idElem = document.createElement('div');
    idElem.classList.add('id');
    idElem.textContent = `Id: ${character.id}`;
    characterInfo.appendChild(idElem);

    const nameElem = document.createElement('div');
    nameElem.classList.add('name');
    nameElem.textContent = `Name: ${character.name}`;
    characterInfo.appendChild(nameElem);

    const occupationElem = document.createElement('div');
    occupationElem.classList.add('occupation');
    occupationElem.textContent = `Occupation: ${character.occupation}`;
    characterInfo.appendChild(occupationElem);

    const cartoonElem = document.createElement('div');
    cartoonElem.classList.add('cartoon');
    cartoonElem.textContent = `Is a Cartoon?: ${character.cartoon}`;
    characterInfo.appendChild(cartoonElem);

    const weaponElem = document.createElement('div');
    weaponElem.classList.add('weapon');
    weaponElem.textContent = `Weapon: ${character.weapon}`;
    characterInfo.appendChild(weaponElem);

    charactersContainer.appendChild(characterInfo);
  });
};

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    // console.log('Button clicked');
    event.preventDefault();

    try {
      const resData = await charactersAPI.getFullList();
      console.log('Response getFullList data:', resData);
      updateMany(resData);
    } catch (err) {
      console.error(err);
    }

    // Alternative code that works

    // charactersAPI.getFullList()
    //   .then(resData => {
    //     console.log('Response getFullList data:', resData);
    //     updateHTML(resData);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    event.preventDefault();

    const characterId = document.querySelector('input[name="character-id"]').value;

    try {
      const resData = await charactersAPI.getOneRegister(characterId);
      console.log('Response getOneRegister data:', resData);
      updateOne(resData);
    } catch (err) {
      console.error(err);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    event.preventDefault();
    
    const characterId = document.querySelector('input[name="character-id-delete"]').value;

    try {
      const resData = await charactersAPI.deleteOneRegister(characterId);
      console.log('Deleted character:', resData);
      this.style.backgroundColor = 'green';
    } catch (err) {
      console.error(err);
      this.style.backgroundColor = 'red';
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const id = document.querySelector('#chr-id').value;
    const name = document.querySelector('#name').value;
    const occupation = document.querySelector('#occupation').value;
    const weapon = document.querySelector('#weapon').value;
    const cartoon = document.querySelector('#cartoon').checked;

    const characterToUpdate = {
      name,
      occupation,
      weapon,
      cartoon
    };

    try {
      const updatedCharacter = await charactersAPI.updateOneRegister(id, characterToUpdate);
      console.log('Updated:', updatedCharacter);
    } catch (err) {
      console.error(err);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const occupation = document.querySelector('input[name="occupation"]').value; 
    const weapon = document.querySelector('input[name="weapon"]').value; 
    const cartoon = document.querySelector('input[name="cartoon"]').checked; 

    const characterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };

    try {
      const createdChar = await charactersAPI.createOneRegister(characterInfo);
      console.log('Character created:', createdChar);
    } catch (err) {
      console.error(err);
    }
  });
});
