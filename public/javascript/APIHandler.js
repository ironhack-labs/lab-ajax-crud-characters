class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log('Response from the API: ', response);
        const { data } = response;
        console.log('The array of characters: ', data);
        return data;
      })
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('Response from the API: ', response);
        const { data } = response;
        console.log('The character: ', data);
      })
      .catch(err => console.log(`Error while getting the character: ${err}`));
  }

  createOneRegister(newCharacterInfo) {
    axios
      .post(`${this.BASE_URL}/characters`, newCharacterInfo)
      .then(response => {
        console.log('Response from the API: ', response);
        const { data } = response;
        console.log('The new character: ', data);
      })
      .catch(err => console.log(`Error while saving a new character: ${err}`));
  }

  updateOneRegister(id, updatedCharacter) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
      .then(response => {
        console.log('Response from the API: ', response);
        const { data } = response;
        console.log('The updated character: ', data);
      })
      .catch(err => console.log(`Error while updating a character: ${err}`));
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('Response from the API: ', response);
        const { data } = response;
        console.log('The deleted character: ', data);
      })
      .catch(err => console.log(`Err while deleting character: ${err}`));
  }
}
