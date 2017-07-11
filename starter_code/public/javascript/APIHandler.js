class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'GET'
    });
  }

  getOneRegister ( id ) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'JSON',
      method: 'GET'
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'JSON',
      method: 'DELETE'
    })
  }
}
