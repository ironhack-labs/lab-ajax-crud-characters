const axios = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.baseUrl}/characters`)
  }

  getOneRegister (id) {
    axios.get(`${this.baseUrl}/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    axios.post(`${this.baseUrl}/characters`, newCharacter)
  }

  updateOneRegister (id, character) {
    axios.put(`${this.baseUrl}/characters/${id}`, character)
  }

  deleteOneRegister (id) {
    axios.delete(`${this.baseUrl}/characters/${id}`)
  }
}

module.exports = APIHandler;
