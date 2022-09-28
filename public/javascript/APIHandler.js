import axios from "axios";

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.baseUrl });
  }

  async getFullList() {
    const { data } = await this.api.get("/characters");
    return data;
  }

  async getOneRegister(characterId) {
    const { data } = await this.api.get(`/characters/${characterId}`);
    return data;
  }

  async createOneRegister(characterInfo) {
    const { data } = await this.api.post("/characters", characterInfo);
    return data;
  }

  async updateOneRegister(characterId, characterInfo) {
    const { data } = await this.api.put(
      `/characters/${characterId}`,
      characterInfo
    );
    return data;
  }

  async deleteOneRegister(characterId) {
    const data = await this.api.delete(`/characters/${characterId}`);
    return data;
  }
}
