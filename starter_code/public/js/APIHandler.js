class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // fecth the data from the pokeapi
    $.ajax({ // 1st argument ->
        // Minimum 4 settings: url, method, success, error
          url: 'http://ih-api.herokuapp.com/characters', // string telling jquery what api to use
          method: 'GET', // HTTP VERB
          // if success put some of the data on the screen (DOM manipulation)
          success: (responseFromApi) => {
          // The 1st param of the "success" callback
          // will always be the data we get from the API
          console.log('Response for characters ');
          console.log(responseFromApi);
  },

    error: (errorFromApi) => {
          alert('Sorry data error 😫');
          console.log(errorFromApi); // test the error
        }
      });
    }


    ///////////////////////////////////////////////////////////////////////////


  getOneRegister (myId) {
    $.ajax({ // 1st argument ->
        // Minimum 4 settings: url, method, success, error
          url: 'http://ih-api.herokuapp.com/characters/' + myId, // string telling jquery what api to use
          method: 'GET', // HTTP VERB
          // if success put some of the data on the screen (DOM manipulation)
          success: (responseFromApi) => {
          // The 1st param of the "success" callback
          // will always be the data we get from the API
          console.log('Response for one character ' + myId);
          console.log(responseFromApi);
  },

    error: (errorFromApi) => {
          alert('Sorry data error 😫');
          console.log(errorFromApi); // test the error
        }
      });
    }

    ///////////////////////////////////////////////////////////////////////////



  createOneRegister (newCharacterDetails) {
    $.ajax({  // 1st argument -> giant settings object
          // Minimum 4 settings: "url", "method", "success" & "error".
    url: 'http://ih-api.herokuapp.com/characters',
    method: 'POST',

    // the "data" setting is only used
    // when you need to send extra info to the API
    data: newCharacterDetails,
        // "newCharacterDetails" is an object that contains:
        // "name", "occupation" & "weapon" properties

    // if successful, put the data on the screen (DOM manipulation)
    success: (responseFromApi) => {
        console.log('works! Yes! 🤠');
        console.log(responseFromApi);
    },

    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry! Character POST error. 😱');
        console.log(errorFromApi);
      }
    });
  }

    ////////////////////////////////////////////////////////////////


  updateOneRegister (myId, newInfo) {
    $.ajax({
    // Notice that we are using PATCH. You could also use PUT.
    method: 'PATCH',
    url: 'http://ih-api.herokuapp.com/characters/' + myId,
    data: newInfo,
    success: (responseFromApi) => {
      alert('UPDATE GOOD. ✅');
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      alert('UPDATE BAD. ❌');
      console.log(errorFromApi);
    }
});
}


  deleteOneRegister () {

  }
}
