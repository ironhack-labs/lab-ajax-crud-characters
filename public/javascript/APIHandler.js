const axios = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = "http://localhost:8000";
    }


    getFullList() {
      return axios.get(`${this.BASE_URL}/characters`);
  };

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  };

  createOneRegister(character) {
    return axios.post(`${this.BASE_URL}/characters`, character);
  };

  updateOneRegister(id, character) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, character);
  };

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  };
}

module.exports = APIHandler;