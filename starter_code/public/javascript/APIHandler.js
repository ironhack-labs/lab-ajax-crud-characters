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
      url: this.BASE_URL+"/characters/"+id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister (object) {
    $.ajax({
      type: "POST",
      url: this.BASE_URL+"/characters",
      data: object,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  updateOneRegister (id,object) {
    $.ajax({
      type: "PATCH",
      url: this.BASE_URL+"/characters/"+id,
      data: object,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}
