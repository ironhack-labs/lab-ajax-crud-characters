class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({ // 1st argument -> giant settings object
          // Minimum 4 settings: url(actual url of the api), method (what method the api tells you to use), success & error(callbacks that do shit depending on what happened)
    url: 'https://ih-api.herokuapp.com/characters',
    method: 'GET',


    // if successful, put some of the data on the screen (DOM Manipulation)
    success: (responseFromApi) => {
      // the first parameter of the 'success' callback will always be the data we get from the API
      console.log('WOOT WOOT, MOTHERFUCKER!!');
      console.log(responseFromApi);
    },


    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry, shit got fucked up');
        console.log(errorFromApi);
    }
  });
  }

  getOneRegister (myId) {
    $.ajax({ // 1st argument -> giant settings object
            // Minimum 4 settings: url(actual url of the api), method (what method the api tells you to use), success & error(callbacks that do shit depending on what happened)
      url: 'https://ih-api.herokuapp.com/characters/' + myId ,
      method: 'GET',


      // if successful, put some of the data on the screen (DOM Manipulation)
      success: (responseFromApi) => {
        // the first parameter of the 'success' callback will always be the data we get from the API
        console.log('WOOT WOOT, MOTHERFUCKER!!' + myId);
        console.log(responseFromApi);

      },


      // if error, show error feedback (DOM manipulation)
      error: (errorFromApi) => {
          alert('Sorry, shit got fucked up');
          console.log(errorFromApi);
      }
    });
  }

  createOneRegister (newCharacterDetails) {
    $.ajax({ // 1st argument -> giant settings object
          // Minimum 4 settings: url(actual url of the api), method (what method the api tells you to use), success & error(callbacks that do shit depending on what happened)
    url: 'https://ih-api.herokuapp.com/characters',
    method: 'POST',

    // the "data" setting is only used when you need to send extra info to the API
    data: newCharacterDetails,
    // "newCharacterDetails" is an object that contains:
    // 'name', 'occupation' & 'weapon' properties

    // if successful, put some of the data on the screen (DOM Manipulation)
    success: (responseFromApi) => {
      // the first parameter of the 'success' callback will always be the data we get from the API
      console.log('WOOT WOOT, MOTHERFUCKER!! THE POST WORKED!');
    },


    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry, shit got fucked up');
        console.log(errorFromApi);
    }
  });
  }

  updateOneRegister (myId, newInfo) {
    $.ajax({
        url: ' https://ih-api.herokuapp.com/characters/' + myId,
        method: 'Patch',
        data: newInfo,
        success: (responseFromApi) => {
          console.log('SUCCESS' + myId);
          alert('Great Job! Update worked!');
          console.log(responseFromApi);
        },
        error: (errorFromApi) => {
          console.log('SHIT' + myId);
          alert('FUUUUUUUCK');
          console.log(errorFromApi);
        }
    });
  }

  deleteOneRegister (myId) {
    $.ajax({
        url: ' https://ih-api.herokuapp.com/characters/' + myId,
        method: 'Delete',
        success: (responseFromApi) => {
          console.log('SUCCESS' + myId);
          alert('Great Job! Update worked!');
          console.log(responseFromApi);
        },
        error: (errorFromApi) => {
          console.log('SHIT' + myId);
          alert('FUUUUUUUCK');
          console.log(errorFromApi);
        }
    });
  }
}
