const charactersAPI = new APIHandler("http://localhost:8000")

function showCharacters(characters) {
  document.querySelector('.characters-container').innerHTML = '';
  characters.forEach((character) => {
    document.querySelector('.characters-container').innerHTML += `
      <div class="character-info">
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon ? 'Yes' : 'No'}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>`;
  });
};

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async () => {
    const characters = await charactersAPI.getFullList();
    showCharacters(characters);
  }
  
  document.getElementById('fetch-one').onclick = async () => {
    const id = document.getElementById('character-id').value;
    const character = await charactersAPI.getOneRegister(id);
    showCharacters(character);
  }
  
  document.getElementById('delete-one').onclick = async () => {
    const id = document.getElementById('character-id-delete').value;
    try {
      const response = await charactersAPI.deleteOneRegister(id);
      document.querySelector('.characters-container').innerHTML = 'Character deleted with success';
    } catch (error) {
      throw new Error(error);
    }
  }
  
  document.getElementById('edit-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const id = document.getElementById('edit-id').value;
    const characterInfo = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').checked,
    };
    
    const editedChar = await charactersAPI.updateOneRegister(id, characterInfo);

    showCharacters(editedChar);
  }
  
  document.getElementById('new-character-form').onsubmit = async (event) => {
    event.preventDefault();
    const characterInfo = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').checked,
    };

    const createdChar = await charactersAPI.createOneRegister(characterInfo);

    showCharacters(createdChar);
  }
})
