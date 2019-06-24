class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(id) {
    return this.api.get(`/characters?id=${id}`);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return this.api.post("/characters", {
      name,
      occupation,
      weapon,
      cartoon
    });
  }

  updateOneRegister(id, name, occupation, weapon, cartoon) {
    return this.api.put(`/characters/${id}`, {
      name,
      occupation,
      weapon,
      cartoon
    });
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
