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

  getOneRegister(id) {
    const itemId = $('#fetch-one').prev('input').val();
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${itemId}`,
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
