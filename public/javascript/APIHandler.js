const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = "http://localhost:8000";
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister() {
    axios.get(`${this.BASE_URL}/characters/:id`);
  }

  createOneRegister() {
    axios.post(`${this.BASE_URL}/characters`);
  }

  updateOneRegister() {
    axios.patch(`${this.BASE_URL}/characters/:id`);
  }

  deleteOneRegister() {
    axios.delete(`${this.BASE_URL}/characters/:id`);
  }
}
