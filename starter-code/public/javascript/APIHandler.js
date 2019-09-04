class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    });
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

  updateOneCharacter(id, data) {
    return this.api.patch(`/characters/${id}`, {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      cartoon: data.cartoon
    });
  }

  deleteOneCharacter(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
