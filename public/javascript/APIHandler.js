class APIHandler {
  constructor(baseURL) {
    // this.baseURL = baseURL;
    this.service = axios.create({
      baseURL: baseURL,
    });
  }

  getFullList () {
    return this.service.get("/characters");
  }

  getOneRegister (id) {
    return this.service.get(`/characters/${id}`);
  }

  createOneRegister (data) {
    return this.service.post("/characters/", data);
  }

  updateOneRegister (id, data){
    return this.service.patch(`/characters/${id}`, data);
  }

  deleteOneRegister (id) {
    return this.service.delete(`/characters/${id}`);
  }
}