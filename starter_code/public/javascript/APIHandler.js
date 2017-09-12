class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  getOneRegister() {
    const characterId = $('#fetch-one').prev('input').val();
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  createOneRegister() {
    const characterInfo = { name: string, occupation: string, debt: boolean, weapon: string };
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "POST",
      data: characterInfo,
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  updateOneRegister() {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/:id",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister() {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/:id",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }
 }
