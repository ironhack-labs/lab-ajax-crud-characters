class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (handleResponse) {
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "GET",
      success: function (response) {
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
        handleResponse(response); 
      },
      error: function (err) {
        //The callback function that will be executed if the request fails, whether it was a client or a server error
        //It will have a parameter with error that caused the request to fail
      },
    });
  }

  getOneRegister (id, handleResponse) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "GET",
      success: function (response) {
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
        handleResponse(response); 
      },
      error: function (err) {
        //The callback function that will be executed if the request fails, whether it was a client or a server error
        //It will have a parameter with error that caused the request to fail
      },
    });

  }

  createOneRegister (characterInfo, handleResponse) {
    $.ajax({
      url:     this.BASE_URL + "/characters/",
      method:  'POST',
      data: characterInfo,
      success: function (response) {
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
        handleResponse(response); 
      },
      error: function (err) {

        handleResponse(err); 
        //The callback function that will be executed if the request fails, whether it was a client or a server error
        //It will have a parameter with error that caused the request to fail
      },
    });
  }

  updateOneRegister(id, characterInfo, handleResponse) {
      $.ajax({
      url:     this.BASE_URL + "/characters/" + id,
      method:  'PUT',
      data: characterInfo,
      success: function (response) {
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
        handleResponse(response); 
      },
      error: function (err) {

        handleResponse(err); 
        //The callback function that will be executed if the request fails, whether it was a client or a server error
        //It will have a parameter with error that caused the request to fail
      },
    });
  }

  deleteOneRegister (id, handleResponse) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "DELETE",
      success: function (response) {
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
        handleResponse(response); 
      },
      error: function (err) {
        //The callback function that will be executed if the request fails, whether it was a client or a server error
        //It will have a parameter with error that caused the request to fail
        handleResponse(err); 
      },
    });

  }
}
