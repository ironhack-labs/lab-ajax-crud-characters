class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'GET',
      success: (responseFromServer) => {
        console.log("Here is the character list:");
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log("Failed to pull character list.");
        console.log(errorFromServer);
      }
    });
  }

  getOneRegister (charId) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + charId,
      method: 'GET',
      success: (responseFromServer) => {
        console.log("Located character info.");
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log("Could not grab character info");
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
        console.log("Character successfully created!");
        console.log(responseFromServer);
      },
      error: (errorFromServer) => {
        console.log("Failure creating character!");
        console.log(errorFromServer);
      }
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
