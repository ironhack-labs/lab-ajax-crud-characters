class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "GET",
      success: function (response) {
        getCharacters(response);
        
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "GET",
      success: function (response) {
        getCharacter(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister (name, occupation, weapon, debt) {

    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    };
   
    $.ajax({
      url: this.BASE_URL + "/characters",
      method: "POST",
      data: characterInfo,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  updateOneRegister (id, name, occupation, weapon, debt) {
    const characterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    };
   
    $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "PUT",
      data: characterInfo,
      success: function (response) {
        console.log(response);
        $("#send-data-update").css("border-color", "green");
      },
      error: function (err) {
        console.log(err);
        $("#send-data-update").css("border-color", "red");
      },
    });
  }

  deleteOneRegister (id) {
    
    $.ajax({
      url: this.BASE_URL +  "/characters/" + id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
        $("#delete-one").css("border-color", "green");
      },
      error: function (err) {
        console.log(err);
        $("#delete-one").css("border-color", "red");
      },
    });
  }
}
