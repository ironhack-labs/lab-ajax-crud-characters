
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      $.ajax({
        url: "http://ih-crud-api.herokuapp.com/characters",
        method: "GET",
        success: function (response) {
          $('.character-info').remove();
        for(let i = 0; i < response.length; i++){
          $(".characters-container").append(
            "<div class='character-info'>" +
              "<div class='name'>Name: " + response[i].name + "</div>" +
              "<div class='occupation'>Occupation: " + response[i].occupation + "</div>" +
              "<div class='debt'>Debt: " + response[i].debt + "</div>" +
              "<div class='weapon'>Weapon: " + response[i].weapon + "</div>" +
            "</div>"
        )}
        },
        error: function (err) {
        console.log(err)
        },
      })
    }

    getOneRegister (id) {
     $.ajax({
       url: "http://ih-crud-api.herokuapp.com/characters/"+id,
       method: "GET",
       success: function (response) {
         $('.character-info').remove();
         $(".characters-container").append(
           "<div class='character-info'>" +
               "<div class='name'>Name: " + response.name + "</div>" +
               "<div class='occupation'>Occupation: " + response.occupation + "</div>" +
               "<div class='debt'>Debt: " + response.debt + "</div>" +
               "<div class='weapon'>Weapon: " + response.weapon + "</div>" +
           "</div>"
       )
       },
       error: function (err) {
       console.log(err)
       },
     })
   }

  createOneRegister () {

    }


  updateOneRegister () {

  }

  deleteOneRegister () {
    let deleteOne = $('#deleteOne').val();
    $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${deleteOne}`,
      method: "DELETE",
      success: function(success){
          $('#delete-one').css('background-color','green');
          console.log('Deleted!');
          $('#deleteOne').val('');
        },
        error: function(error){
          console.error('Error');
          $('#delete-one').css('background-color','red');
        }
      })
    }
}
