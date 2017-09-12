class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
    url: "ih-api.herokuapp.com/characters",
    method: "GET",
    success: function (response) {
    console.log(response);
    var obj = jQuery.parseJSON( response );
    console.log(obj);
    },
    error: function (err) {
      console.log(err);
    },
    });
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
