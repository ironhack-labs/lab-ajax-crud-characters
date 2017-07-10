class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'GET',
      success: (responseFromServer) => {
        console.log("Grabbing list successful!");
      },
      error: (errorFromServer) => {
        console.log("Unable to grab full list");
      }
    });
  }

  getOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters/:id/',
      method: 'GET',
      success: (responseFromServer) => {
        console.log("Found Id!");
      },
      error: (errorFromServer) => {
        console.log("Could not find Id!");
      }
    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
