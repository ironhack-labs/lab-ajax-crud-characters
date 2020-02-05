class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({baseURL: this.BASE_URL});
  }

  getFullList () {
    return this.api.get("/characters");
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister (newCharacter) {
    return this.api.post("/characters", newCharacter);
  }

  updateOneRegister (id, updatedCharacter) {
    return this.api.patch(`/characters/${id}`, updatedCharacter);
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`);
  }
}

export default APIHandler;