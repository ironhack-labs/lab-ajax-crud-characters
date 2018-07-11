const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com");
const characterContainer = document.getElementById('characters-container');

const appendCharacter = character => {
  // Character Card
  var infoContainer = document.createElement('div')
  infoContainer.className = 'character-info';
  
  // Create ID
  var infoId = document.createElement('div')
  infoId.className = 'id'
  infoId.innerHTML = `Id: ${character.id}`

  // Create Name
  var infoName = document.createElement('div')
  infoName.className = 'name'
  infoName.innerHTML = `Name: ${character.name}`

  // Create Occupation
  var infoOccupation = document.createElement('div')
  infoOccupation.className = 'occupation'
  infoOccupation.innerHTML = `Occupation: ${character.occupation}`;

  // Create Cartoon
  var infoCartoon = document.createElement('div')
  infoCartoon.className = 'cartoon'
  infoCartoon.innerHTML = `Cartoon: ${character.debt}`;

  // Create Weapon
  var infoWeapon = document.createElement('div')
  infoWeapon.className = 'weapon'
  infoWeapon.innerHTML = `Weapon: ${character.weapon}`;

  // Put All Together
  infoContainer.appendChild(infoId);
  infoContainer.appendChild(infoName);
  infoContainer.appendChild(infoOccupation);
  infoContainer.appendChild(infoCartoon);
  infoContainer.appendChild(infoWeapon);

  characterContainer.appendChild(infoContainer);
}

const cleanContainer = () => characterContainer.innerHTML = ""

const getAllCharacters = () => {
  cleanContainer();
  charactersAPI.getFullList()
  .then(res => {
    let characters = res.data
    for(c of characters) appendCharacter(c);
  })
}

const getFormData = n => {
  let cartoon = document.getElementsByName('cartoon')[n].value === "on" ? true : false;

  let character = {
    "name": document.getElementsByName('name')[n].value,
    "occupation": document.getElementsByName('occupation')[n].value,
    "weapon": document.getElementsByName('weapon')[n].value,
    "debt": cartoon
  }

  document.getElementsByName('name')[n].value = "";
  document.getElementsByName('occupation')[n].value = "";
  document.getElementsByName('weapon')[n].value = "";
  document.getElementsByName('cartoon')[n].value = "";

  return character;
}

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = getAllCharacters
  
  document.getElementById('fetch-one').onclick = function(){
    let characterId = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(characterId)
    .then(character => {
      cleanContainer();
      document.getElementsByName('character-id')[0].value = "";
      appendCharacter(character.data);
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let characterId = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(characterId)
    .then(data => {
      document.getElementsByName('character-id-delete')[0].value = "";
      getAllCharacters();
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault();

    let id = document.getElementsByName('chr-id')[0].value;
    let character = getFormData(1);

    charactersAPI.updateOneRegister(id, modifiedCharacter)
    .then(data => {
      cleanContainer();
      appendCharacter(modifiedCharacter)
    });
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
    event.preventDefault();

    let character = getFormData(0);

    charactersAPI.createOneRegister(character)
    .then(data => {
      appendCharacter(character)
    });
  }
})