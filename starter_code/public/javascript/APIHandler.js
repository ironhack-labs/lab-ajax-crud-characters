/*jshint esversion: 6 */

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    });
  }

  getOneRegister (charId) {
    return $.ajax({
     url: `${this.BASE_URL}/characters/${charId}`
  });
}

  createOneRegister (e) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "GET",
      data: e
    });
  }

  updateOneRegister (charId, e) {

  }

  deleteOneRegister () {

  }
}
