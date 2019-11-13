class APIHandler {
  constructor(baseURL) {
    this.service = axios.create({
      baseURL: baseURL
    });
  }

  getFullList() {
    return this.service.get("/characters");
  }

  getOneRegister(id) {
    return this.service.get(`/characters/` + id);
  }

  createOneRegister(object) {
    return this.service.post("/characters", object);
  }

  updateOneRegister(object, id) {
    return this.service.patch("/characters/" + id, object);
  }

  deleteOneRegister(id) {
    return this.service.delete("/characters/" + id);
  }
}
