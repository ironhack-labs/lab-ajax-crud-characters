class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "GET",
      success: function (response) {
        console.log(response);
        return response;
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters/" + id,
      method: "GET",
      success: function (response) {
        console.log(response);
        $('#display-name').html(response.name);
        $('#display-occupation').html(response.occupation);
        $('#display-weapon').html(response.weapon);
        if (response.debt === 'true') {
          $('#display-debt').html("Has Debt");
        }
        else if (response.debt === 'true') {
          $('#display-debt').html("No Debt");
        }
        else {
          $('#display-debt').html("Debt Unknown");
        }
        return response;
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister () {

    var debtCheck = function() {
      if ($('#debt-input').is(":checked")) { return true; }
      else { return false; }
    }

    var characterInfo = {
      name:         $('#new-name-input').val(),
      occupation:   $('#new-occupation-input').val(),
      weapon:       $('#new-weapon-input').val(),
      debt:         debtCheck()
    };
    // Make a POST request
    $.ajax({
      type:    'POST',
      url:     `${this.BASE_URL}/characters`,
      data:    characterInfo,
      // success: showFeedback,
      // error:   handleError
    });
    console.log("success!");
  }

  updateOneRegister () {

    var debtCheck = function() {
      if ($('#debt-input').is(":checked")) { return true; }
      else { return false; }
    }

    const updateInfo = {
      name:       $('#update-name-input').val(),
      occupation: $('#update-occupation-input').val(),
      weapon:     $('#update-weapon-input').val(),
      debt:       debtCheck()
    };

    const charId = $('#character-id-input').val();

    $.ajax({
      type: 'PATCH',
      url: `${this.BASE_URL}/characters/${charId}`,
      data: updateInfo,
      success: (patchResponse) => {
        console.log('Update SUCCESS!');
        console.log(patchResponse);
      },
      // error: handleError
    });
  }

  deleteOneRegister () {
    const charId = $('#character-id-delete').val();

    $.ajax({
      type: 'DELETE',
      url: `${this.BASE_URL}/characters/${charId}`,
      success: (patchResponse) => {
        console.log('Delete SUCCESS!');
        console.log(patchResponse);
      },
      // error: handleError
    });
  }
}
