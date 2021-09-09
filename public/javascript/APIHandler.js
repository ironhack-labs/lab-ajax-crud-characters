const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseUrl : this.BASE_URL});
  }

  getFullList = () => this.api.get("/characters");
  getOneRegister = (id) => this.api.get(`/characters/${id}`);
  createOneRegister = (body) => this.api.post("/characters", body);
  updateOneRegister = (id) => this.api.put(`/characters/${id}`);
  deleteOneRegister = (id) => this.api.delete(`/characters/${id}`);
}

module.exports = APIHandler;
