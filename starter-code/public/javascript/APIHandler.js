class APIHandler {
  constructor(baseUrl) {
    this.service = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList() {
    return this.service.get("/characters");
  }

  getOneRegister(id) {
    return this.service.get("/characters/" + id);
  }

  createOneRegister(info) {
    return this.service.post("/characters", info);
  }

  updateOneRegister(id, info) {
    return this.service.patch("/characters/" + id, info);
  }

  deleteOneRegister(id) {
    return this.service.delete("/characters/" + id);
  }
}
