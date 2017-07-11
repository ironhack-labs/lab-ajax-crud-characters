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
      method: "POST",
      data: e
    });
  }

  updateOneRegister (charId, e) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${charId}`,
      method: "PATCH",
      data: e
    });
  }

  deleteOneRegister (charId) {
    return $.ajax({
     url: `${this.BASE_URL}/characters/${charId}`,
     method: "DELETE"
   });
  }
}
