class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({

    url: 'https://ih-api.herokuapp.com/characters',
    method: 'GET',

    // if successful, put some of the data on the screen (DOM monipulation)
    success: (responseFromApi) => {
        console.log('THESE ARE THE CHARACTERSSSSSSSSSSS');
        responseFromApi.forEach(function(characterInfo){
          $('.characters-container').html(`
              <div class="character-info">
                <div class="name">Character Name: ${characterInfo.name}</div>
                <div class="occupation">Character Occupation: ${characterInfo.occupation}</div>
                <div class="debt">Character Weapon: ${characterInfo.weapon}</div>
                <div class="weapon">Character Debt: ${characterInfo.debt}</div>
              </div>
          `);

        });
    },

    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry! Character post error. 😑');
        console.log(errorFromApi);
    }
  });
  }

  getOneRegister(myId) {
    $.ajax({ // 1st arg -> giant settings object
    url: 'https://ih-api.herokuapp.com/characters/' + myId,
    method: 'GET',

    // if successful, put some of the data on the screen (DOM monipulation)
    success: (responseFromApi) => {
        // The 1st parameter of the "success" callback
        // will always be the data we get from the API.
        console.log('This is the character with id: ' + myId);
        console.log(responseFromApi);
        $('.name').html(`<p> Character Name: ${responseFromApi.name}</p>`);
        $('.occupation').html(`<p> Character Occupation: ${responseFromApi.occupation} </p>`);
        $('.debt').html(`<p> Character Weapon: ${responseFromApi.weapon} </p>`);
        $('.weapon').html(`<p> Character Debt: ${responseFromApi.debt} </p>`);
    },

    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry! Error trying to get character by id. 😑');
        console.log(errorFromApi);
    }
  });
  }

  createOneRegister(newCharacterDetails) {
    $.ajax({

    url: 'https://ih-api.herokuapp.com/characters',
    method: 'POST',

    // the "data" setting is only used when you need to send the api extra info
    data: newCharacterDetails,
          // "newCharacterDetails" is an object that contains:
          // name: , occupation: , and weapon: properties

    // if successful, put some of the data on the screen (DOM monipulation)
    success: (responseFromApi) => {
        console.log('posted a new character');
    },

    // if error, show error feedback (DOM manipulation)
    error: (errorFromApi) => {
        alert('Sorry! Character post error. 😑');
        console.log(errorFromApi);
    }
  });
  }

  updateOneRegister(myId, newInfo) {
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters/' + myId,
    method: 'PATCH',
    // the "data" setting is only used when you need to send the api extra info
    data: newInfo,

    // if successful, put some of the data on the screen (DOM monipulation)
    success: (responseFromApi) => {
      alert('updated character with id: ' + myId);
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      alert('i got an error when i tried to update a character with id: ' + myId);
      console.log(errorFromApi);
    }
  });
  }

  deleteOneRegister(myId) {
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters/' + myId,
    method: 'DELETE',

    success: (responseFromApi) => {
      alert('deleted character');
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      alert('i got an error when i tried to delete a character');
      console.log(errorFromApi);
    }
  });
  }
}
