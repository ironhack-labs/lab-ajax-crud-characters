const charactersAPI = new APIHandler('http://localhost:8000/characters')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then (characters => {
      let str = '';
        characters.data.forEach(character => {
          str += `
              <div class="character-info">
              <div class="chr-id">Character ID:${character.id}</div>
              <div class="name">Character Name:${character.name}</div>
              <div class="occupation">Character Occupation:${character.occupation}</div>
              <div class="weapon">Character Weapon:${character.weapon}</div>
              <div class="cartoon">Is a cartoon?:${character.cartoon}</div>
              </div>`;
        });
  
        document.querySelector('.characters-container').innerHTML = str;
      });
    })
    })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementById('chr-id').value)
    .then(character => {
     const { id, name, occupation, weapon, cartoon } = character.data;
     document.querySelector('.characters-container').innerHTML = `
     <div class="character-info">
     <div class="chr-id">Character ID:${id}</div>
     <div class="name">Character Name:${name}</div>
     <div class="occupation">Character Occupation:${occupation}</div>
     <div class="weapon">Character Weapon:${weapon}</div>
     <div class="cartoon">Is a cartoon?:${cartoon}</div>
     </div>`
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.getElementById('delete-id').value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const charName = document.getElementById('update-name-input');
    const charOccupation = document.getElementById('update-occupation-input');
    const charWeapon = document.getElementById('update-weapon-input');
    const charId = document.getElementById('char-id');

  const { id, name, occupation, weapon } = response.data;
          charName.value = name;
          charOccupation.value = occupation;
          charWeapon.value = weapon;
          charCartoon.value = cartoon;
          charId.value = id;
          document.getElementById('update-form-div').style.display = 'block';

document.getElementById('edit-character-form').addEventListener('submit', event => {
      event.preventDefault();
      const charId = document.getElementById('chr-id').value;
      const charName = document.getElementById('update-name-input').value;
      const charOccupation = document.getElementById('update-occupation-input').value;
      const charWeapon = document.getElementById('update-weapon-input').value;
      const charCartoon = document.getElementById('update-cartoon-input').value;
      
      const updatedCharacter = {
        name: charName,
        occupation: charOccupation,
        weapon: charWeapon,
        cartoon: charCartoon
      };

      charactersAPI.updateOneRegister(charId, updatedCharacter);

      document.getElementById('edit-character-form').reset();
      document.getElementById('edit-character-form').style.display = 'none';
  })
      .catch(error => console.log(`Error while updating a character: ${error}`));
    })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name-input').value;
    const occupation = document.getElementById('occupation-input').value;
    const weapon = document.getElementById('weapon-input').value;
    const cartoon = document.getElementById('cartoon-input').value;
    
    const newCharacterInfo = {
        name,
        occupation,
        weapon, 
        cartoon
      };
    
    console.log('New character: ', newCharacterInfo);

    charactersAPI.createOneRegister(newCharacterInfo);
  })
