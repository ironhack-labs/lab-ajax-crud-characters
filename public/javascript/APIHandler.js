class APIHandler {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8000",
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(newRegister) {
    newRegister = req.body;
    return this.api.post(newRegister);
  }

  updateOneRegister(id, editedRegister) {
    return this.api.put(`/characters/${id}`, editedRegister);
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
