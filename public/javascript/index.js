const charactersAPI = new APIHandler('http://localhost:8000');
const charContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    try {
      const allCharacters = await charactersAPI.getFullList();
      charContainer.innerHTML = '';
      for (let i = 0; i < allCharacters.data.length; i++) {
        const newCharacter = createCharacterCard(allCharacters.data[i]);
        charContainer.innerHTML += newCharacter;
      }
    } catch (error) {
      console.log(error);
    }

  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const id = document.getElementById('input-fetch-one').value;
      const character = await charactersAPI.getOneRegister(id);
      const newCharacter = createCharacterCard(character.data);
      charContainer.innerHTML = '';
      charContainer.innerHTML += newCharacter;
      document.getElementById('input-fetch-one').value = '';
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const id = document.getElementById('input-delete-one').value;
      await charactersAPI.deleteOneRegister(id);
      document.getElementById('delete-one').style.backgroundColor = 'green';
      document.getElementById('input-delete-one').value = '';
    } catch (error) {
      document.getElementById('delete-one').style.backgroundColor = 'red';
      console.log(error);
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();
      const id = document.getElementById('edit-id').value;
      const obj = {};
      if (document.getElementById('edit-name').value) obj.name = document.getElementById('edit-name').value;
      if (document.getElementById('edit-occupation').value) obj.occupation = document.getElementById('edit-occupation').value;
      if (document.getElementById('edit-weapon').value) obj.weapon = document.getElementById('edit-weapon').value;
      obj.cartoon = document.getElementById('edit-cartoon').checked;
      await charactersAPI.updateOneRegister(id, obj)
    } catch (error) {
      console.log(error);
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    try {
      event.preventDefault();
      const obj = {
        name: document.getElementById('new-name').value,
        occupation: document.getElementById('new-occupation').value,
        weapon: document.getElementById('new-weapon').value,
        cartoon: document.getElementById('new-cartoon').checked
      }
      await charactersAPI.createOneRegister(obj)
      document.getElementById('new-send-data').style.backgroundColor = 'green';
    } catch (error) {
      document.getElementById('new-send-data').style.backgroundColor = 'red';
      console.log(error);
    }
  });
});

function createCharacterCard(character) {
  return `
    <div class="character-info">
      <div class="id">Id:<span>${character.id}</span></div>
      <div class="name">Name:<span>${character.name}</span></div>
      <div class="occupation">Occupation:<span>${character.occupation}</span></div>
      <div class="cartoon">Is a Cartoon?:<span>${character.cartoon}</span></div>
      <div class="weapon">Weapon:<span>${character.weapon}</span></div>
    </div>
  `
}