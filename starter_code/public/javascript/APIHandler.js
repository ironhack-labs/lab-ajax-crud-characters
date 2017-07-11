class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    });
  }

  getOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`
    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${id}`
    });
  }
}
