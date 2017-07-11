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

  createOneRegister (e) {
    return $.ajax({
      method: 'POST',
      url: `${this.BASE_URL}/characters`,
      data: e,
    });
  }

  updateOneRegister (id, e) {
    return $.ajax({
      method: 'PATCH',
      url: `${this.BASE_URL}/characters/${id}`,
      data: e,
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${id}`
    });
  }
}
