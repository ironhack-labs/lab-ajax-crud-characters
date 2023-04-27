const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    //this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseUrl: baseUrl
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(body) {
    return this.api.post("/characters", body);
  }

  updateOneRegister(id, body) {
    return this.api.put(`/characters/${id}`, body);
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}

module.export = APIHandler;
