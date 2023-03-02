const axios = require('axios');

class APIHandler {
  constructor () {
    this.baseURL = axios.create({
      baseURL: 'http://127.0.0.1:8000/'
    });
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };

  getOneCharacter = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  }

  createCharacter = (characterInfo) => {
    
    return this.api.post(`/characters`, characterInfo);
  }

  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }
  
  editCharacter = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }
}

module.exports = APIHandler;