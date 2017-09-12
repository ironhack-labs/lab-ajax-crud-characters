class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'GET',
    });
  }

  getOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      dataType: 'JSON',
      method: 'GET',
    });
  }

  createOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'POST',

    });
  }

  updateOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      dataType: 'JSON',
      method: 'PATCH',
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/:id`,
      dataType: text,
      method: 'DELETE',
    });
  }
}
