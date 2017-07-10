class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',
      success: (responseFromApi) => {
        console.log(responseFromApi);
      },
      error: (errorFromApi) => {
        console.log(errorFromApi);
      }
    });
  }

  getOneRegister() {

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
