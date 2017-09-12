class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "GET",
      success: function(response) {
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  getOneRegister() {
    const characterId = $('#fetch-one').prev('input').val();
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      method: "GET",
      success: function(response) {
        $(".character-info .name").html(JSON.stringify(response.name));
        $(".character-info .occupation").html(JSON.stringify(response.occupation));
        $(".character-info .debt").html(JSON.stringify(response.debt));
        $(".character-info .weapon").html(JSON.stringify(response.weapon));
        console.log(response);
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  createOneRegister() {
    const characterInfo = {
      name: $("#new-name").val(),
      occupation: $("#new-occupation").val(),
      debt: $("#new-debt").val(),
      weapon: $("#new-weapon").val()
    };
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "POST",
      data: characterInfo,
      success: function(response) {
        $('#send-data').css('background','green');
        console.log(response);
      },
      error: function(err) {
        console.log(err);
        $('#send-data').css('background','red');
      },
    });
  }

  updateOneRegister() {
    const characterId = $("#edit-id").val();

    const characterInfo = {
      name: $("#edit-name").val(),
      occupation: $("#edit-occupation").val(),
      weapon: $("#edit-weapon").val()
    };
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      method: "PUT",
      data: characterInfo,
      success: (patchResponse) => {
      console.log('Update SUCCESS!');
      $('#edit-data').css('background','green');
      console.log(patchResponse);
      },
      error: function(err) {
        console.log(err);
        $('#edit-data').css('background','red');
      },
    });
  }

  deleteOneRegister() {
    const characterId = $('#delete-one').prev('input').val();
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${characterId}`,
      method: "DELETE",
      success: function(response) {
        $('#delete-one').css('background','green');
        console.log(response);
      },
      error: function(err) {
        console.log(err);
          $('#delete-one').css('background','red');
      },
    });
  }

}
