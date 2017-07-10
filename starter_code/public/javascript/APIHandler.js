class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'GET',
      success: (responseFromServer) => {
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log(errorFromServer);
      }
    });
  }

  getOneRegister (charId) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + charId,
      method: 'GET',
      success: (responseFromServer) => {
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log(errorFromServer);
      }
    });
  }

  createOneRegister (newCharacter) {
    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'POST',
      data: newCharacter,
      success: (responseFromServer) => {
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log(errorFromServer);
      }
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
