class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    let object;
    $.ajax({
      url: this.BASE_URL,
      method: "GET",
      success: data => {
       getAllCharacters(data);
     },
      error: error => {
        console.log(error);
      }
    });
    return object;
  }

  getOneRegister (characterId) {
    $.ajax({
      url: this.BASE_URL+'/'+characterId,
      method: "GET",
      success: data => {
        getOneCharacter(data);
        // console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      url: this.BASE_URL,
      method: "POST",
      data: characterInfo,
      success: data => {
        console.log("CREATED: " + data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  updateOneRegister (updateInfo, characterId) {
    $.ajax({
      url: this.BASE_URL+'/'+characterId,
      method: "PATCH",
      data: updateInfo,
      success: data => {
        console.log("UPDATED: " + data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  deleteOneRegister (characterId) {
    $.ajax({
      url: this.BASE_URL+'/'+characterId,
      method: "DELETE",
      success: data => {
        console.log(data);

      },
      error: error => {
        console.log(error);
      }
    });
  }
}
