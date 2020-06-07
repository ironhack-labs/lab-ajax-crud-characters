class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {

    return axios.get(`${this.BASE_URL}/characters`)
      .then(characters => characters)
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  getOneRegister(id) {

    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(character => character)
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  createOneRegister(newCharacter) {
    
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
      .then()
      .catch(err => console.log(`Error while creating new character: ${err}`));
  }

  updateOneRegister(updateCharacter, id) {

    return axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter)
      .then(character => character)
      .catch(error => console.log(`Error while updating a character: ${error}`));
  }

  deleteOneRegister(id) {

    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(character => character)
      .catch(err => console.log(`Err while deleting character: ${err}`));
  }
}