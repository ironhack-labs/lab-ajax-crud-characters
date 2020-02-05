class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getCharacters() {
    return this.api.get("/characters");
  }

  getCharacter(id) {
    return this.api.get(`/characters/${id}`);
  }

  createCharacter(data) {
    return this.api.post("/characters", data);
  }

  deleteCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }

  editCharacter(id, data) {
    return this.api.patch(`/characters/${id}`, data);
  }
}

export default APIHandler;
