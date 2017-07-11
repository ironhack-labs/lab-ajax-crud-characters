class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    });
  }

  getOneRegister(charOne) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${charOne}`
    });

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
