class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: 'GET',
      success: response => console.log(response),
      error: err => console.log(err)
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'GET',
      success: response => console.log(response),
      error: err => console.log(err.responseText)
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      url: `${this.BASE_URL}/characters/`,
      data: characterInfo,
      method: 'POST',
      success: response => console.log(response),
      error: err => console.log(err)
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
