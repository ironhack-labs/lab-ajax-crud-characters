/*jshint esversion:6*/

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList(uri) {
        $.ajax({
            url: this.BASE_URL + uri,
            method: "GET",
            success: function(response) {
                console.log(response);
                //The callback function that will be executed if the request is completed succesfully
                //This function will have a parameter with the server response.
            },
            error: function(err) {
                console.log("ERROR");
                //The callback function that will be executed if the request fails, whether it was a client or a server error
                //It will have a parameter with error that caused the request to fail
            },
        });
    }

    getOneRegister(uri, id) {
        $.ajax({
            url: this.BASE_URL + uri + id,
            method: "GET",
            success: function(response) {
                console.log(response);
                //The callback function that will be executed if the request is completed succesfully
                //This function will have a parameter with the server response.
            },
            error: function(err) {
                console.log("ERROR");
                //The callback function that will be executed if the request fails, whether it was a client or a server error
                //It will have a parameter with error that caused the request to fail
            },
        });
    }

    createOneRegister(uri, characterInfo) {
        $.ajax({
            // Notice that we are using POST
            method: 'POST',
            url: this.BASE_URL + uri,
            // The data key is for sending data in a POST, PUT or PATCH!
            data: characterInfo,
            success: showFeedback,
            error: handleError
        });
    }


    updateOneRegister(uri, charId) {


        $.ajax({
            // Notice that we are using PATCH. You could also use PUT.
            method: 'PATCH',
            url: this.BASE_URL + uri + charId,
            data: updateInfo,
            success: (patchResponse) => {
                console.log('Update SUCCESS!');
                console.log(patchResponse);
            },
            error: handleError
        });
    }

    deleteOneRegister(uri, charid) {
      $.ajax({
          // Notice that we are using PATCH. You could also use PUT.
          method: 'DELETE',
          url: this.BASE_URL + uri + charid,
          success: (patchResponse) => {
              console.log('Character has been successfully deleted');
          },
          error: handleError
      });
    }
}

function showFeedback(postResponse) {
    console.log('post success');
    console.log(postResponse);
}

function handleError(err) {
    console.log('Oh no! Error:');
    console.log(err);
}
