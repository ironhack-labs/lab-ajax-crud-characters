class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+ id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister (info) {
    document.getElementById("new-character-form").reset();
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "POST",
      data: info,
      succes:function (response) {
        console.log("Inserted");
        $('.submit-button').css("background-color","green");
      },
      error: function (err) {
        console.log("FAIL");
        $('.submit-button').css("background-color","red");
      },
    });
  }

  updateOneRegister (id, info) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "PATCH",
      data: info,
      succes:function (response) {
        console.log("Updated");
      },
      error: function (err) {
        console.log("There were an error while updating");
      },
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "DELETE",
      succes:function (response) {
        console.log("Deleted");
      },
      error: function (err) {
        console.log("There were an error while deleting");
      },
    });
  }

}
