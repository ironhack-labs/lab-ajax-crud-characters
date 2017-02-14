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
        $("#send-data").css("background-color","green");
        console.log(response);
      },
      error: function (err) {
        $("#send-data").css("background-color","red");
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
        $("#send-data2").css("background-color","green");
        console.log(response);
      },
      error: function (err) {
        $("#send-data2").css("background-color","red");
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
////////////////////Iteration 2
  getFullListAndPrint() {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        response.forEach(function(value) {
          console.log(value);
          $(".userList").append("<div class='character-chart'></div>");
          $(".character-chart").append("Character Name: "+value.name+"<br>");
          $(".character-chart").append("Character Occupation: "+value.occupation+"<br>");
          $(".character-chart").append("Character Debt: "+value.debt+"<br>");
          $(".character-chart").append("Character Weapon: "+value.weapon+"<br>");
          $(".character-chart").append("Character ID: "+value.id+"<br>");
          $(".character-chart").append("____________________________________<br>");
        });
        // console.log(response[0].name);

      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneAndPrint (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "GET",
      success: function (response) {
        $(".userList").append("<div class='character-chart'></div>");
        $(".character-chart").append("Character Name: "+response.name+"<br>");
        $(".character-chart").append("Character Occupation: "+response.occupation+"<br>");
        $(".character-chart").append("Character Debt: "+response.debt+"<br>");
        $(".character-chart").append("Character Weapon: "+response.weapon+"<br>");
        $(".character-chart").append("Character ID: "+response.id+"<br>");
        $(".character-chart").append("____________________________________<br>");
      },
      error: function (err) {
        console.log(err);
      },
    });
  }


}
