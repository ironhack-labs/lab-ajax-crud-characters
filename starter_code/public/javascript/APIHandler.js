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

  createOneRegister(e) {
    return $.ajax({
      method: 'POST',
      dataType: 'json',
      url: `${this.BASE_URL}/characters`,
      data: e
    });

  }


  updateOneRegister(id, e) {
    return $.ajax({
      method: 'PATCH',
      dataType: 'json',
      url: `${this.BASE_URL}/characters/${id}`,
      data: e
    });
  }

  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'DELETE'
  });
}

}
