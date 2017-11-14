class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      success: function(result) {
        for (var i = 0; i < result.length; i++) {
          console.log(result[i]);
          $(".characters-container").append(
            "<div class='character-info'>" +
            "<div class='name'> Name: " + result[i].name + "</div>" +
            "<div class='occupation'> Occupation: " + result[i].occupation + "</div>" +
            "<div class='debt'> Debt: " + result[i].debt + "</div>" +
            "<div class='weapon'> Weapon: " + result[i].weapon + "</div>" +
            "</div>"
          );
        }
      }
    });
  }

  getOneRegister() {

  }

  createOneRegister() {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "POST",
      data: $('#new-character-form').serialize(),
      success: function(response) {
        console.log("Success");
      },
      error: function(err) {
        console.log("Error");
      },
    })
  }

  updateOneRegister() {

  }


  deleteOneRegister() {
let id = $('#delete-id').val();
$.ajax({
  url:`http://ih-crud-api.herokuapp.com/characters/${id}`,
  method: "DELETE",
  success: function(response) {
    $('#delete-one').css('background-color','green');
    console.log("Success");
  },
  error: function(err) {
    console.log("Error");
  },
});
}


}
