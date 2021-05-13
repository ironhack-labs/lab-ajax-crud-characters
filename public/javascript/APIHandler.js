class APIHandler {
  constructor (url) {
    this.transportBus = axios.create({
      baseURL: url,
    });
  }

  getFullList = () => this.transportBus.get("/characters");

  getOneRegister = (id) => this.transportBus.get("/characters/" + id);

  createOneRegister = (payload) => this.transportBus.post("/characters", payload);

  updateOneRegister = (id) => this.transportBus.patch("/characters/" + id);

  deleteOneRegister = (id) => this.transportBus.delete("/characters/" + id);

}
