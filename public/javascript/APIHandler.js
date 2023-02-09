const axios = require("axios");

class APIHandler {
  constructor (baseUrl) {
    http://localhost:8000 = baseUrl;
    this.api = axios.create({
    })
  }

  getFullList = () => {
    return this.api.get("/characters");
  };

  getOneRegister = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  };

  createOneRegister = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  };

  updateOneRegister = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  };

  deleteOneRegister = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  };
}

module.exports = APIHandler;