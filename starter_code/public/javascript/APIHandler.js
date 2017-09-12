class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
    return $.get(`${this.BASE_URL}/characters`);
}

  getOneRegister (id) {
    return $.get(`${this.BASE_URL}/characters/`, + id);
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
