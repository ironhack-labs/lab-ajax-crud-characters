const axios = require("axios");
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.api.get(`/characters`);
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(character) {
    return this.api.post(`/characters`, character);
  }

  updateOneRegister(id, character) {
    return this.api.put(`/characters/${id}`, character);
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}

module.exports = APIHandler;
