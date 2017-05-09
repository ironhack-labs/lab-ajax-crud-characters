/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "get",
      success: function (response) {
        var container = $('.characters-container');
        var html = "";
        container.empty();
        response.forEach( function(e) {html += createCharacterInfo(e) ;});
        //console.log(e.name);
        container.append(html);
      },
      error: function (err) {
        alert("request fail");
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/"+id,
      method: "get",
      success: function (response) {
        var container = $('.characters-container');
        var html = "";
        container.empty();
        //console.log(e.name);
        container.append(createCharacterInfo(response));
      },
      error: function (err) {
        alert("request fail");
      },
    });
  }

  createOneRegister (obj) {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/",
      method: "post",
      data: obj,
      success: function (response) {
      },
      error: function (err) {
        alert("request fail");
      },
    });
    this.getFullList ();
  }

  updateOneRegister (obj) {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/"+obj.id,
      method: "put",
      data: obj,
      success: function (response) {
      },
      error: function (err) {
        alert("request fail");
      },
    });
    this.getOneRegister (obj.id);
  }


  deleteOneRegister (id) {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/"+id,
      method: "delete",
      success: function (response) {
      },
      error: function (err) {
        alert("request fail");
      },
    });
    this.getFullList ();
  }
}
