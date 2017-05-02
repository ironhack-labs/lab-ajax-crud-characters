/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL,
      method: "get",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (charID) {
    $.ajax({
      url: this.BASE_URL + charID,
      method: "get",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister () {
    let name = $('#name-new').val();
    let occupation = $('#occupation-new').val();
    let debt = $('#debt-new').prop('checked');
    let weapon = $('#weapon-new').val();
    const charNew = { name: name, occupation: occupation, debt: debt, weapon: weapon };
    $.ajax({
      url: this.BASE_URL,
      method: "post",
      data: charNew,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  updateOneRegister (charID) {
    let name = $('#name-edit').val();
    let occupation = $('#occupation-edit').val();
    let debt = $('#debt-edit').prop('checked');
    let weapon = $('#weapon-edit').val();
    const charEdit = { name: name, occupation: occupation, debt: debt, weapon: weapon };
    $.ajax({
      url: this.BASE_URL + charID,
      method: "patch",
      data: charEdit,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister (charID) {
    $.ajax({
      url: this.BASE_URL + charID,
      method: "delete",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}
