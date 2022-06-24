const axios = require('axios');

class APIHandler {
  constructor () {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com'
    }); 
  }

  getFullList () {
    return this.api.get('/characters');
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister (characterInfo) {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}

module.exports = APIHandler;