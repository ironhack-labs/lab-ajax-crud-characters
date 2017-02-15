/* jshint esversion:6 */
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
  url: this.BASE_URL + "/characters",
  method: "GET",
  success: function (response) {
    console.log(response);

  },
  error: function (err) {
    console.log(err);
  },
});

  }

  getOneRegister () {
    $.ajax({
  url: this.BASE_URL + "/characters/:id",
  method: "GET",
  dataType: 'json',
  success: function (response) {
    console.log(response);
  },
  error: function (err) {
    console.log(err);

  },
  });

  }

  createOneRegister () {
    $.ajax({
  url: this.BASE_URL + "/characters",
  method: "POST",
  success: function (response) {
    console.log(response);

  },
  error: function (err) {
    console.log(err);
  },
});

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
