class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return $.get(`${this.BASE_URL}/id` + id)
  }

  createOneRegister (character) {
    return $.post(`${this.BASE_URL}/characters`)
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
