const axios = require('axios');
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL,
    })
  }

  getFullList () {
return this.api.get('/characters');
  }

  getOneRegister (characterId) {
return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister (character) {
return this.api.post("/characters", character);
  }

  updateOneRegister(characterId, character) {
    return this.api.put(`/characters/${characterId}`, character);
  }

  deleteOneRegister(characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}

module.export = APIHandler;
