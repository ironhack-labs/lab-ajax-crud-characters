class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters');
      // .then(response => {
      //   console.log('response', response.data);
      // })
      // .catch(err => console.log('error occurred', err));
  }

  getOneRegister(characterId) {
    return axios.get(this.BASE_URL + `/characters/${characterId}`);
      // .then(response => {
      //   console.log('response', response.data);
      // })
      // .catch(err => console.log('error occurred', err));
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + '/characters', character);
      // .then(response => {
      //   const {
      //     name,
      //     occupation,
      //     weapon,
      //     cartoon
      //   } = response.data;

      //   console.log(`New character created - Name: ${response.data.name} ID: ${response.data.id}`);

      //   //--------------------------
      //   //COLOCAR NO INDEX.JS   ----
      //   // const newCharacterDiv = document.createElement('div');
      //   // newCharacterDiv.innerHTML = `<p>New character created - Name: ${response.data.name} ID: ${response.data.id}</p>`;
      //   // document.body.appendChild(newCharacterDiv);
      //   //--------------------------
      // })
      // .catch(err => {
      //   console.log('error occurred:', err);
      // });
  }

  updateOneRegister(characterId, updatedCharacter) {
    return axios.patch(this.BASE_URL + `/characters/${characterId}`, updatedCharacter);
      // .then(response => {
      //   console.log('Character updated!');

      //   //--------------------------
      //   //COLOCAR NO INDEX.JS   ----
      //   // const updatedCharacterDiv = document.createElement('div');
      //   // updatedCharacterDiv.innerHTML = `<p>Character updated!</p>`;
      //   // document.body.appendChild(updatedCharacterDiv);
      //   //--------------------------
      // })
      // .catch(err => {
      //   if (err.response.status === 404) {
      //     const errorDiv = document.createElement('div');
      //     errorDiv.innerHTML = `<p>There's no character with id: ${characterId}</p>`;
      //     document.body.appendChild(errorDiv);
      //   }
      // });
  }


  deleteOneRegister(characterId) {
    return axios.delete(this.BASE_URL + `/characters/${characterId}`);
      // .then(response => {
      //   console.log('Character has been successfully deleted.');
      // })
      // .catch(err => {
      //   console.log('Character not found.');
      // });
  }
}