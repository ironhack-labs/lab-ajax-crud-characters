class APIHandler {
  constructor (url) {
    this.transportBus = axios.create({
      baseURL: url,
    });
  }

  getFullList = () => this.transportBus.get("/characters");

  getOneRegister = (id) => this.transportBus.get("/characters/" + id);

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
