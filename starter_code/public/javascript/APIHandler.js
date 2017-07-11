class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // Requests to API
  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: 'GET',
      dataType: 'json',
    });
  }

  getOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'GET',
      dataType: 'json'
    });
  }

  createOneRegister(data) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/`,
      method: 'POST',
      dataType: 'json',
      data: data,
    });
  }

  updateOneRegister(id, data) {
    return $.ajax({
      url: ` ${this.BASE_URL}/characters/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: data,
    });
  }

  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'DELETE',
      dataType: 'json',
    });
  }
}
