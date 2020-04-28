class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + '/characters')
      .then(response => {
        console.log('response', response.data);
      })
      .catch(err => console.log('error occurred', err));
  }

  getOneRegister(characterId) {
    
    axios
      .get(this.BASE_URL + `/characters/${characterId}`)
      .then(response => {
        console.log('response', response.data);
      })
      .catch(err => console.log('error occurred', err));
  }

  createOneRegister(character) {
    // character = {
    //   name: String,
    //   occupation: String,
    //   cartoon: Boolean,
    //   weapon: String
    // };

    if(typeof character.name !== 'string'){
      console.log('name is not a string. Try again.');
      return;
    }
    if(typeof character.occupation !== 'string'){
      console.log('occupation is not a string. Try again.');
      return;
    }
    if(typeof character.cartoon !== 'boolean'){
      console.log('cartoon is not boolean. Try again.');
      return;
    }
    if(typeof character.weapon !== 'string'){
      console.log('weapon is not a string. Try again.');
      return;
    }

    axios
      .post(this.BASE_URL + '/characters', character)
      .then(response => {
        const {
          name,
          occupation,
          weapon,
          cartoon
        } = response.data;
        const newCharacterDiv = document.createElement('div');
        newCharacterDiv.innerHTML = `<p>New character created - Name: ${response.data.name} ID: ${response.data.id}</p>`;
        document.body.appendChild(newCharacterDiv);

        console.log(`New character created - Name: ${response.data.name} ID: ${response.data.id}`);
      })
      .catch(err => {
        console.log('error occurred:', err);
      });
  }

  updateOneRegister(characterId, updatedCharacter) {
    
    updatedCharacter = {
      name: String,
      occupation: String,
      cartoon: Boolean,
      weapon: String
    };

    axios
      .patch(this.BASE_URL + `/characters/${characterId}`, updatedCharacter)
      .then(response => {
        console.log('Character updated!');

        const updatedCharacterDiv = document.createElement('div');
        updatedCharacterDiv.innerHTML = `<p>Character updated!</p>`;
        document.body.appendChild(updatedCharacterDiv);
      })
      .catch(err => {
        if (err.response.status === 404) {
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = `<p>There's no character with id: ${characterId}</p>`;
          document.body.appendChild(errorDiv);
        }
      });
  }


  deleteOneRegister(characterId) {
    
    axios
      .delete(this.BASE_URL + `/characters/${characterId}`)
      .then(response => {
        console.log('Character has been successfully deleted.');
      })
      .catch(err => {
        console.log('Character not found.');
      });
  }
}