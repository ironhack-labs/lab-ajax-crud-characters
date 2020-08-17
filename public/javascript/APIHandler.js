class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${BaseUrl}/characters`)
      .then(response => {
        console.log('The response from the API is: ', response.data);
      })
      .catch(err => console.log('error while getting the data: ', err));
  }

  getOneRegister(characterId) {
    axios
      .get(`${baseUrl}/characters/${characterId}`)
      .then(response => {
        console.log('The response from the API is: ', response.data);
      })
      .catch(err => console.log('error while getting the character: ', err));
  }

  createOneRegister(newCharacter) {
    axios
      .post(`${baseUrl}/characters/${newCharacter}`)
      .then(() => {
        console.log(`The new character is: ${newCharacter}`)
      })
      .catch(err => console.log(`Error while creating a new character: ${err}`));
  }

  updateOneRegister(characterId, updatedCharacter) {
    axios
      .put(`${baseUrl}/characters/${characterId}`, updatedCharacter)
      .then(() => {
        console.log(`Character's new information is: ${updatedCharacter}`)
      })
      .catch(err => console.log(`Error updating existing character`, err));
  }

  deleteOneRegister(characterId) {
    axios
      .delete(`${baseUrl}/characters/${characterId}`)
      .then(() => {
        console.log(`Character has been successfully deleted.`)
      })
      .catch(err => console.log(`error deleting character: `, err));
  }
}