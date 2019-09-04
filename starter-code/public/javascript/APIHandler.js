class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({ baseURL: baseUrl });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneCharacter(id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneCharacter(data) {
    return this.api.post("/characters", data);
  }
  updateOneCharacter() {}

  deleteOneCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
