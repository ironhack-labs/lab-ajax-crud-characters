class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',
      success: (responseFromApi) => {
        console.log(responseFromApi);
      },
      error: (errorFromApi) => {
        console.log(errorFromApi);
      }
    });
  }

  getOneRegister(id) {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/' + id,
      method: 'GET',
      success: (responseFromApi) => {
        $('.name').append(`
          <span> ${responseFromApi.name} </span>
        `);
        $('.occupation').append(`
          <span> ${responseFromApi.occupation} </span>
        `);
        $('.debt').append(`
          <span> ${responseFromApi.debt} </span>
        `);
        $('.weapon').append(`
          <span> ${responseFromApi.weapon} </span>
        `);
      },
      error: (errorFromApi) => {
        alert('Sorry, there was an error.');
        console.log(errorFromApi);
      }
    });
  }

  createOneRegister(newCharacter) {
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters',
    method: 'POST',
    //'data' is only used when we need to send the API
    //extra information
    data: newCharacter,
    //we can use this because newCharacter is an object
    //that already contains the data we want to post to the API
    success: (responseFromApi) => {
      alert('A new character has been saved!');
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      alert('Sorry, character POST error.');
      console.log(errorFromApi);
    }
  });
  }

  updateOneRegister(id, newInfo) {
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters/' + id,
    method: 'PATCH',
    data: newInfo,
    success: (responseFromApi) => {
      alert('The character\'s information has been updated.');
      console.log(responseFromApi);
    },
    error: (errorFromApi) => {
      console.log(errorFromApi);
    }
    });
  }

  deleteOneRegister(id) {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/' + id,
      method: 'DELETE',
      success: (responseFromApi) => {
        alert('Success deleting the character.');
      },
      error: (errorFromApi) => {
        alert('Sorry, there was an error.');
        console.log(errorFromApi);
      }
    });
  }
}
