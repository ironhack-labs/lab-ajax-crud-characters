/*jshint esversion: 6*/

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
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

  getOneRegister(id) {
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

  createOneRegister (name, occ, weap, debt) {
    const characterInfo = {
      name: name,
      occupation: occ,
      weapon: weap,
      debt: debt

    };

    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "POST",
      data: characterInfo ,
      success: function (postResponse) {
        console.log('post success');
        console.log(postResponse);
      },
      error: function (err) {
        console.log('Oh no! Error:');
        console.log(err);
      },
    });
  }

  updateOneRegister (id, name, occ, weap, debt) {
    const characterEdit = {
      name: name,
      occupation: occ,
      weapon: weap,
      debt: debt
    };

    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "PUT",
      data: characterEdit ,
      success: function (postResponse) {
        console.log('post success');
        console.log(postResponse);
      },
      error: function (err) {
        console.log('Oh no! Error:');
        console.log(err);
      },
    });

  }

  deleteOneRegister(id) {
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
