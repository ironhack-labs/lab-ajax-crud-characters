const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async () => {
    const response = await charactersAPI.getFullList();

    document.querySelector('.characters-container').innerHTML = '';

    response.data.forEach((character) => {
      document.querySelector('.characters-container').innerHTML += `
      <div class="character-info">
      <div class="name">Character Name: ${character.name} </div>
      <div class="occupation">Character Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div>
    </div>
        `;
    });
  };

  document.getElementById('fetch-one').onclick = async () => {
    const getId = document.getElementById('theid').value;
    const response = await charactersAPI.getOneRegister(getId);
    const { data } = response;

    document.querySelector('.characters-container').innerHTML = `
      <div class="character-info">
      <div class="name">Character Name: ${data.name} </div>
      <div class="occupation">Character Occupation: ${data.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${data.cartoon}</div>
      <div class="weapon">Character Weapon: ${data.weapon}</div>
    </div>
        `;
  };

  document.getElementById('delete-one').onclick = async () => {
    const getId = document.getElementById('idtodel').value;

    try {
      await charactersAPI.deleteOneRegister(getId);

      document.querySelector('.characters-container').innerHTML = `
  
      <div class="character-info">
      <div class="name">Character Name</div>
      <div class="occupation">Character Occupation</div>
      <div class="cartoon">Is a Cartoon?</div>
      <div class="weapon">Character Weapon</div>
    </div>
        `;
      document.getElementById('delete-one').classList.add('btn-green');
    } catch (err) {
      document.getElementById('delete-one').classList.add('btn-red');
      document.getElementById('idtodel').value = 'Value not found';
    }
  };

  document.getElementById('edit-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const editId = document.getElementById('edit-id').value;
    const editName = document.getElementById('edit-name').value;
    const editOccupation = document.getElementById('edit-occupation').value;
    const editWeapon = document.getElementById('edit-weapon').value;
    const editCheckbox = document.getElementById('edit-checkbox').value;

    const updateFormData = {
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editCheckbox,
    };
    try {
      await charactersAPI.updateOneRegister(updateFormData, editId);
      document.getElementById('edit-send-data').classList.add('btn-green');
    } catch (err) {
      document.getElementById('edit-send-data').classList.add('btn-red');
    }
  };

  document.getElementById('new-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const newName = document.getElementById('new-name').value;
    const newOccupation = document.getElementById('new-occupation').value;
    const newWeapon = document.getElementById('new-weapon').value;
    const newCartoon = document.getElementById('new-cartoon').value;

    const newCharacter = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newCartoon,
    };

    try {
      await charactersAPI.createOneRegister(newCharacter);
      document.getElementById('new-send-data').classList.add('btn-green');
    } catch (err) {
      document.getElementById('new-send-data').classList.add('btn-red');
    }
  };
});