class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister(characterInfo) {
    return this.api.post("/characters", characterInfo);
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api.post(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister() {
    return this.api.delete(`/characters/${characterId}`);
  }
}
