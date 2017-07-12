class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
// ---------------------------------------------------------------



  getFullList (characterId) {


        $.ajax({

            url: this.BASE_URL + '/characters',
            method: 'GET',
            success: (responseFromApi) => {
                // The 1st parameter of the "success" callback
                // will always be the data we get from the API.
                console.log(responseFromApi);

                // Add the information to the <p> tag

            },

            // if error, show error feedback (DOM manipulation)
            error: (errorFromApi) => {
                alert('Sorry! character data error. 😱');
                console.log(errorFromApi);
            }
        });
    }

// -----------------------------------------------------------









  getOneRegister (id) {

    $.ajax({
  url: this.BASE_URL + '/characters' + Id,
  method: "GET",
  success: function (response) {
    console.log(response);
  },
  error: function (err) {
    console.log(err);
  },
});




  }







  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
