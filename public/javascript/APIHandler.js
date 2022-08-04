/* const axios = require('axios'); */

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
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

  createOneRegister (characterData) {
    return this.api.post('/character', characterData)
  }

  updateOneRegister (id, {characterData}) {
    return this.api.put(`/characters/${id}`, {characterData})
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`)
  }
}

/* module.exports=APIHandler; */
