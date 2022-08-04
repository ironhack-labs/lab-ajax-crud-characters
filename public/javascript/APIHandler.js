/* const baseModule = require("hbs"); */

class APIHandler {
  constructor (BASE_URL) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList () {
    return this.api.get('/characters')
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
  }

  createOneRegister (character) {
    this.api.post(`/characters`, character)
  }

  updateOneRegister (id, updateRegister) {
    this.api.put(`/characters/${id}`, updateRegister)
  }

  deleteOneRegister (id) {
    this.api.delete(`/characters/${id}`)
  }
}