const charactersAPI = new APIHandler('http://localhost:8000');

const divCharactersContainer = document.querySelector(".characters-container")

function listCharactersContainer(id, name, occupation, cartoon, weapon){


  const divCharactersInfo = document.createElement("div")
  const divId = document.createElement("div")
  const divName =document.createElement("div")
  const divOccupation =document.createElement("div")
  const divCartoon =document.createElement("div")
  const divWeapon =document.createElement("div")

  divCharactersInfo.className = "character-info";
  divId.className = "id"
  divName.className = "name";
  divOccupation.className = "occupation";
  divCartoon.className = "cartoon";
  divWeapon.className = 'weapon';

  divId.innerHTML = "Id: "
  divName.innerHTML = "Name: "
  divOccupation.innerHTML = "Occupation: ";
  divCartoon.innerHTML = "Is a Cartoon?: ";
  divWeapon.innerHTML = 'Weapon: ';

  const spanId = document.createElement("span")
  const spanName = document.createElement("span")
  const spanOccupation = document.createElement("span")
  const spanCartoon = document.createElement("span")
  const spanWeapon = document.createElement("span")

  spanId.innerHTML = id;
  spanName.innerHTML = name;
  spanOccupation.innerHTML = occupation;
  spanCartoon.innerHTML = cartoon;
  spanWeapon.innerHTML = weapon;

  divId.appendChild(spanId);
  divName.appendChild(spanName);
  divOccupation.appendChild(spanOccupation);
  divCartoon.appendChild(spanCartoon);
  divWeapon.appendChild(spanWeapon);

  divCharactersInfo.appendChild(divId);
  divCharactersInfo.appendChild(divName);
  divCharactersInfo.appendChild(divOccupation);
  divCharactersInfo.appendChild(divCartoon);
  divCharactersInfo.appendChild(divWeapon);

  divCharactersContainer.appendChild(divCharactersInfo)

}

window.addEventListener('load', () => {document.getElementById('fetch-all').addEventListener('click', async function (event) {
  try {const characters = await charactersAPI.getFullList();

    const allCharactersInfo = characters.data;
    divCharactersContainer.innerHTML = " ";

    allCharactersInfo.forEach(character => {
      const {id, name, occupation, cartoon, weapon} = character
      listCharactersContainer(id, name, occupation, cartoon, weapon);
    });


  } catch (error) {
    console.error('Error loading characters', error)
  }document.getElementById('fetch-one').addEventListener('click', async function (event) {
    try {
      const idCharacter = document.getElementById('character-id').value;

      if(idCharacter !== ''){

        const findCharacterById = await charactersAPI.getOneRegister(idCharacter);

        const {id, name, occupation, cartoon, weapon} = findCharacterById.data
        divCharactersContainer.innerHTML = " ";
        listCharactersContainer(id, name, occupation, cartoon, weapon);
      }



    } catch (error) {
      console.error('Error founding the character', error)
    }

  });document.getElementById('delete-one').addEventListener('click', async function (event) {
    try {
      const idCharacter = document.getElementById('character-id-delete').value;
      if(idCharacter !== ''){
        await charactersAPI.deleteOneRegister(idCharacter);
        document.getElementById('delete-one').style.background = "green";
      }
    } catch (error) {
      document.getElementById('delete-one').style.background = "red";
      console.error('Error deleting the character', error)
    }
  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
      const characterId = document.getElementById('chr-id').value;
      const characterName = document.getElementById('name-update').value;
      const characterOccupation = document.getElementById('occupation-update').value;
      const characterWeapon = document.getElementById('weapon-update').value;
      const characterCartoon = document.getElementById('checkbox-update').checked;

      if(characterId === ''){
        document.getElementById('send-data-update').style.background = "red";
        console.error('Error updating the character', error)
      }else{

        const foundCharacter = await charactersAPI.getOneRegister(characterId);

        if(foundCharacter){
          const characterUpdate = await charactersAPI.updateOneRegister(characterId, {name: characterName,  occupation: characterOccupation, weapon: characterWeapon, cartoon: characterCartoon})
          document.getElementById('send-data-update').style.background = "green";
        }else{
          document.getElementById('send-data-update').style.background = "red";
          console.error('Error updating the character', error)
        }
      }

    } catch (error) {
      document.getElementById('send-data').style.background = "red";
      console.error('Error updating the character', error)
    }

  });document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
      const characterName = document.getElementById('name').value;
      const characterOccupation = document.getElementById('occupation').value;
      const characterWeapon = document.getElementById('weapon').value;
      const characterCartoon = document.getElementById('cartoon').checked;

      const characterCreate = await charactersAPI.createOneRegister({name: characterName,  occupation: characterOccupation, weapon: characterWeapon, cartoon: characterCartoon})

      document.getElementById('send-data').style.background = "green";

    } catch (error) {
      document.getElementById('send-data').style.background = "red";
      console.error('Error creating the character', error)
    }

  });
});
})