class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }

  getFullList () {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(allCharacters => {
        return allCharacters
      })
      .catch(error => {
        return "There aren't characters";
      })
  }

  getOneRegister (id) {
    return axios
    .get(`${this.BASE_URL}/characters/:id`)
    .then(oneCharacter => {
      return oneCharacter
    })
    .catch(error => {
      return "That isn't a character with this id";
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
