class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}


  getOneRegister (charID) {
    axios
    .get(`${this.BASE_URL}/characters/${charID}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

  }

  createOneRegister (newCharacter) {
    axios
    .post(`${this.BASE_URL}/characters/`, newCharacter)
    .then(response => console.log(response))
    .catch(error => console.log(error));

  }

  updateOneRegister (charID, updateCharacter) {
    axios
    .patch(`${this.BASE_URL}/characters/${charID}`, updateCharacter)
    .then(response => console.log(response))
    .catch(error => console.log(error));

  }

  deleteOneRegister (charID) {
    axios
    .delete(`${this.BASE_URL}/characters/${charID}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

  }
}
