const charactersAPI = new APIHandler('http://localhost:8000/characters');
const oneCharacter = document.querySelector('input[name=character-id]');
const deleteCharacter = document.querySelector('input[name="character-id-delete"]');
const characterContainer = document.querySelector('.characters-container');

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async function() {
    const response = await charactersAPI.getFullList();
    const allCharacters = response.data;

    console.log(allCharacters);

    allCharacters.forEach(character => {
      const {id, name, occupation, cartoon, weapon} = character;
      const characterCard = document.createElement('div');
      characterCard.classList.add('character-info');
      characterCard.innerHTML = `
          <div class="id">Id: ${character.id} </div>
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>    
`;
      characterContainer.appendChild(characterCard);
    });

    console.log(response);
  };
  //************************************************************** */
  document.getElementById('fetch-one').onclick = async function() {
    const characterId = oneCharacter.value;
    const response = await charactersAPI.getOneRegister(characterId);
    const character = response.data;

    const {id, name, occupation, cartoon, weapon} = character;
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-info');
    characterCard.innerHTML = `
          <div class="id">Id: ${character.id} </div>
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>    
`;
    characterContainer.appendChild(characterCard);
  };

  document.getElementById('delete-one').onclick = async function() {
    const deleteID = deleteCharacter.value;
    await charactersAPI.deleteOneRegister(deleteID);
  };

  document.getElementById('edit-character-form').onsubmit = async event => {
    event.preventDefault();
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').check;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const updateId = {id, name, occupation, cartoon, weapon};
    await charactersAPI.updateOneRegister(id, updateId);
  };

  document.getElementById('new-character-form').onsubmit = async event => {
    event.preventDefault();
    const name = document.querySelector('.form-container input[name="name"]').value;
    const occupation = document.querySelector('.form-container input[name="occupation"]').value;
    const cartoon = document.querySelector('.form-container input[name="cartoon"]').check;
    const weapon = document.querySelector('.form-container input[name="weapon"]').value;

    const newCharacter = {id, name, occupation, cartoon, weapon};

    await charactersAPI.createOneRegister(newCharacter);
  };
});
