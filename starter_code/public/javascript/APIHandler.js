class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  createOneRegister (character) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/`,
      method: "POST",
      data: character,
      success: function(response) {
        console.log(character);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  updateOneRegister (id, character) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: "PUT",
      data: character,
      success: function(response) {
        console.log(character);
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: "DELETE",
      success: function(response) {
        console.log("Character succesfully deleted");
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
}
