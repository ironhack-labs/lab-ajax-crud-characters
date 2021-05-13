class APIHandler {
  constructor (url) {
    this.transportBus = axios.create({
      baseURL: url,
    });
  }

  getFullList = () => this.transportBus.get("/characters");

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
