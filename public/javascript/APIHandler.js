//const axios = require("axios");
const baseURL = "http://localhost:8000";
class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  async getFullList() {
    const { data } = await this.api.get("/characters");
    return data;
  }

  async getOneRegister(id) {
    const { data } = await this.api.get(`/characters/${id}`);
    return data;
  }

  async createOneRegister(characterData) {
    return this.api.post("/characters", characterData);
  }

  updateOneRegister(characterData, id) {
    return this.api.put(`/characters/${id}`, characterData);
  }

  async deleteOneRegister(id) {
    return await this.api.delete(`/characters/${id}`);
  }
}
