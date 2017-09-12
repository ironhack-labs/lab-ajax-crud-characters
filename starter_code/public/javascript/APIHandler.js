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
    const characterInfo = {
      name: $("#new-name").val(),
      occupation: $("#new-occupation").val(),
      debt: $("#new-debt").val(),
      weapon: $("#new-weapon").val()
    };
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
    const characterInfo = {
      name: $("#new-name").val(),
      occupation: $("#new-occupation").val(),
      debt: $("#new-debt").val(),
      weapon: $("#new-weapon").val()
    };
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "PUT",
      data: characterInfo,
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister() {
    const characterId = $('#delete-one').prev('input').val();
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      method: "DELETE",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

}
