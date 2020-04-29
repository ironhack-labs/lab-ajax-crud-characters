/* jshint esversion: 9*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get(`http://localhost:8000/characters`)
      .then(response => {
        document.getElementById("characters-container").innerHTML = "";
        const characters = response.data;
       
       characters.forEach(character => {
        let characterHTML = `
        <div class="character-info">
          <div class="name" id="charName">Character Name: ${character.name}</div>
          <div class="occupation" id="charOcc">Character Occupation: ${character.occupation}</div>
          <div class="cartoon" id="charType">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon" id="charWeapon">Character Weapon: ${character.weapon}</div>
        </div>
        `;
          document.getElementById("characters-container").innerHTML += characterHTML;
        });
      })
      .catch(err => console.log('An error occurred: ', err));
    console.log('List required');
  }

  getOneRegister (id) {
    console.log('Character required');
    axios
      .get(`http://localhost:8000/characters/${id}`)
      .then(response => {
        const character = response.data;

        let characterHTML = `
        <div class="character-info">
          <div class="name" id="charName">Character Name: ${character.name}</div>
          <div class="occupation" id="charOcc">Character Occupation: ${character.occupation}</div>
          <div class="cartoon" id="charType">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon" id="charWeapon">Character Weapon: ${character.weapon}</div>
        </div>
        `;
        
        document.getElementById("characters-container").innerHTML = characterHTML;
      })
      .catch(err => {
        console.log('An error ocurred: ', err);
      });
  }

  createOneRegister () {
    
    const character = {
      name: document.getElementById('newCharName').value,
      occupation: document.getElementById('newCharOcc').value,
      weapon: document.getElementById('newCharWeapon').value,
      cartoon: document.getElementById('newCharType').value
    };
    
    if (character.cartoon === 'on') {
      character.cartoon = true;
    } else if (character.cartoon === 'off') {
      character.cartoon = false;
    }

    axios
      .post(`http://localhost:8000/characters`, character)
      .then(response => {
        const { name, occupation, weapon, cartoon } = response.data;
        document.getElementById('new-character-form').reset();
      })
      .catch(err => console.log('An error ocurred: ', err));
    console.log('Character created');
  }

  updateOneRegister (characterId, updateName, updateOccupation, updateWeapon, updateCartoonValue) {
    
    
    const updateCharacter = {
      name: updateName,
      occupation: updateOccupation,
      weapon: updateWeapon,
      cartoon: updateCartoonValue
    };

    if (updateCharacter.cartoon === 'on') {
      updateCharacter.cartoon = true;
    } else if (updateCharacter.cartoon === 'off') {
      updateCharacter.cartoon = false;
    }

    axios
      .patch(`http://localhost:8000/characters/${characterId}`, updateCharacter)
      .then(response => {
        console.log('response', response);
        document.getElementById('edit-character-form').reset();
      })
      .catch(err => {
        console.log('An error ocurred: ', err);
        const errorDiv = document.createElement('div.character-info');
        errorDiv.innerHTML = `<p>There is no character with id: ${characterId}</p>`;
        document.body.appendChild(errorDiv);
      });
    
    console.log('Character upadated')
  }

  deleteOneRegister (characterId) {
    axios
      .delete(`http://localhost:8000/characters/${characterId}`)
      .then(response => {
        console.log(`The character with the Id ${characterId} has been deleted!`);
        document.getElementById('del-id').reset();
      })
      .catch(err => {
        console.log('An error ocurred: ', err);
        const errorDiv = document.createElement('div.character-info');
        errorDiv.innerHTML = `<p>There is no character with id: ${characterId}</p>`;
        document.body.appendChild(errorDiv);
      });
  }
}
