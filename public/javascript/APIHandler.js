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
    return this.service.get(`/${id}`);
  }

  createOneRegister (data) {
    return this.service.post("/create/", data);
  }

  updateOneRegister (id, data){
    return this.service.patch(`/${id}`, data);
  }

  deleteOneRegister (id) {
    return this.service.delete(`/${id}`);
  }
}