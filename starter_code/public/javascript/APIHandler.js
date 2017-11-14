class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
        // Notice that we are using POST
      method:  'GET',
      url:     `${this.BASE_URL}/characters/`,
        // The data key is for sending data in a POST, PUT or PATCH!
      //data:    characterInfo,
      success: function (response) {
        console.log(response);
        $.each(response, function(i, item) {
          $(".characters-container").append(
             "<div class='character-info'>" +
                 "<div class='name'>Name: " + item.name + "</div>" +
                 "<div class='occupation'>Occupation: " + item.occupation + "</div>" +
                 "<div class='debt'>Debt: " + item.debt + "</div>" +
                "<div class='weapon'>Weapon: " + item.weapon + "</div>" +
            "</div>"
          );
        });
        //The callback function that will be executed if the request is completed succesfully
        //This function will have a parameter with the server response.
      },
      error: function (err) {
            console.log(err)
      },
    });
  }

  getOneRegister () {
    let id = $("#character_id").val();
    if( id == "" ){
      alert("ID empty, enter ID");
    }else{

    $.ajax({
        // Notice that we are using POST
      method:  'GET',
      url:     `${this.BASE_URL}/characters/${id}`,
        // The data key is for sending data in a POST, PUT or PATCH!
      //data:    characterInfo,
      success: function (response) {
          $(".characters-container").append(
             "<div class='character-info'>" +
                 "<div class='name'>Name: " + response.name + "</div>" +
                 "<div class='occupation'>Occupation: " + response.occupation + "</div>" +
                 "<div class='debt'>Debt: " + response.debt + "</div>" +
                "<div class='weapon'>Weapon: " + response.weapon + "</div>" +
            "</div>"
          );
      },
      error: function (err) {
          console.log(err);
      },
    });

  }
}

  createOneRegister () {
     let name = $('#name').val();
     let occupation = $('#occupation').val();
     let weapon = $('#weapon').val();
     let debt = $('#debt').prop("checked");

     const characterInfo = {
       name,
       occupation,
       debt,
       weapon
     };
    $.ajax({
        // Notice that we are using POST
      method:  'POST',
      url:     `${this.BASE_URL}/characters`,
      data:    characterInfo,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
          console.log(err);
      },
    });
  }

  updateOneRegister () {
    let ed_id = $("#ed_id").val();
    let ed_name = $('#ed_name').val();
    let ed_occupation = $('#ed_occupation').val();
    let ed_weapon = $('#ed_weapon').val();
    let ed_debt = $('#ed_debt').prop("checked");

    const characterInfo = {
      name: ed_name,
      occupation: ed_occupation,
      debt: ed_debt,
      weapon: ed_weapon
    };

    $.ajax({
        // Notice that we are using POST
      method:  'PATCH',
      url:     `${this.BASE_URL}/characters/${ed_id}`,
      data:    characterInfo,
      success: function (response) {
        console.log(response);
        let ed_id = $("#ed_id").val("");
        let ed_name = $('#ed_name').val("");
        let ed_occupation = $('#ed_occupation').val("");
        let ed_debt = $('#debt').prop("none");
        let ed_weapon = $('#ed_weapon').val("");
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteOneRegister () {
    let delId = $('#delete').val();

    $.ajax({
        // Notice that we are using POST
      method:  'DELETE',
      url:     `${this.BASE_URL}/characters/${delId}`,
      success: function (response) {
          console.log(response);
          $('#delete').val('');
      },
      error: function (err) {
        console.log(err);
      },
    });
  }


}
