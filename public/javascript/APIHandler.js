class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({ baseURL: baseURL });
    this.BASE_URL = baseURL;
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(charId) {
    return this.api.get(`/characters/${charId}`);
  }

  createOneRegister(charInfo) {
    return this.api.post(`/characters/`, charInfo);
  }

  updateOneRegister(charId, charInfo) {
    return this.api.put(`/characters/${charId}`, charInfo);
  }

  deleteOneRegister(charId) {
    return this.api.delete(`/characters/${charId}`);
  }
}
