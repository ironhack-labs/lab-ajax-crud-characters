//Peticiones API

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

  createOneRegister(c) {
    return $.ajax({
      method: 'POST',
      dataType: 'json',
      url: `${this.BASE_URL}/characters`,
      data: c
    });

  }

  updateOneRegister(id, c) {
    return $.ajax({
      method: 'PATCH',
      dataType: 'json',
      url: `${this.BASE_URL}/characters/${id}`,
      data: c
    });
  }

  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'DELETE'
    });
  }
}
