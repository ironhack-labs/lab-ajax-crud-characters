class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      success: function(result){
        for(var i = 0; i < result.length; i++){
          console.log(result[i]);
          $(".characters-container").append(
            "<div class='character-info'>" +
                "<div class='name'>Name: " + result[i].name + "</div>" +
                "<div class='occupation'>Occupation: " + result[i].occupation + "</div>" +
                "<div class='debt'>Debt: " + result[i].debt + "</div>" +
                "<div class='weapon'>Weapon: " + result[i].weapon + "</div>" +
            "</div>"
          );
        }
      }
    });
  }

  getOneRegister () {
    var id = $('#character-id').val();
    if(id === "") {
      alert('Please enter an id')
    } else {
      $.ajax({
        url: "http://ih-crud-api.herokuapp.com/characters/"+ id,
        success: function(result){
          console.log(result);
          $(".characters-container").append(
            "<div class='character-info'>" +
                "<div class='name'>Name: " + result.name + "</div>" +
                "<div class='occupation'>Occupation: " + result.occupation + "</div>" +
                "<div class='debt'>Debt: " + result.debt + "</div>" +
                "<div class='weapon'>Weapon: " + result.weapon + "</div>" +
            "</div>"
          );
        }
      });
    }
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
