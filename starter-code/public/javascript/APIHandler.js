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
    return this.service.get("/characters/"+id)
  }

  createOneRegister(object) {

    return this.service.post("/characters", object)
  }

  updateOneRegister(id,object) {
    return this.service.patch("/characters/"+id,object)
  }

  deleteOneRegister(id) {
    return this.service.delete("/characters/"+id)
  }
}
