class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (characterId) {
    return $.get(`${this.BASE_URL}/characters/${characterId}`)
   }

  createOneRegister (character) {
    return $.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
