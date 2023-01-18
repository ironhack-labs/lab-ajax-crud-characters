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
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(newCharInfo) {
    return this.api.post(`/characters`, newCharInfo);
  }

  updateOneRegister(id, editCharInfo) {
    return this.api.put(`/characters/${id}`, editCharInfo);
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
