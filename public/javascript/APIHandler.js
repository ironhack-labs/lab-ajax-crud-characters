class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: 'GET',
      success: (data) => {
        data.forEach(function(character) {
          console.log('Anotha one:');
          console.log(character);
        });
      },
      error: (err) => {
        console.log('GET characterlist error');
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${id}`,
      method: 'GET',
      success: (result) => {
        console.log(result);
    }
  });
}

  deleteOneRegister (id) {
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${id}/`,
      method: 'DELETE',
      success: (result) => {
        console.log(result);
    }
  });
  }

  createOneRegister (charInfo) {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'POST',
      data: charInfo,
      success: (data) => {
        console.log(`POST ${data.name} success`);
        console.log(data);
      },
      error: (err) => {
        console.log('POST character error');
        console.log(err);
      }
    });
  }


  updateOneRegister (id, charInfo) {
  $.ajax({
    method: 'PUT',
    url: `https://ih-api.herokuapp.com/characters/${id}`,
    data: charInfo,
    success: (result) => {
      console.log(`PUT ${result.name} success`);
      console.log(charInfo);
    },
    error: (err) => {
      console.log('PUT error');
      console.log(err);
    }
  });
}

}
