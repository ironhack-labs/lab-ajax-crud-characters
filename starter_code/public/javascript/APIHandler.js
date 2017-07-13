class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      method: 'GET',
      url: `https://ih-api.herokuapp.com/characters`,
      success: showAllCharacters,
      error: handleError
    });
  }

  getOneRegister () {
    // The character ID that we will plug into the API's URL
    const charId = $('#character-id').val();

    $.ajax({
      method: 'GET',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      success: showOneCharacter ,
      error: handleError
    });
  }

  createOneRegister () {
    const characterInfo = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      weapon: $('#new-weapon').val(),
      dept: $('#new-dept').val(),
    };

    $.ajax({
      method: 'POST',
      url: 'https://ih-api.herokuapp.com/characters',
      data: characterInfo,
      success: () => {
        showFeedback;
        $('#send-new-data').css("background-color", "green");
      },
      error: () => {
        $('#send-new-data').css("background-color", "red");
        handleError
      }
    });
  }

  updateOneRegister () {
    const updateInfo = {
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      weapon: $('#edit-weapon').val()
      // debt: $('#edit-debt').val()
    };

    // The character ID that we will plug into the API's URL
    const charId = $('#edit-id').val();

    $.ajax({
        // Notice that we are using PATCH. You could also use PUT.
      method: 'PATCH',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: () => {
        $('#send-edit-data').css("background-color", "green");
      },
      error: () => {
        $('#send-edit-data').css("background-color", "red");
        handleError
      }
    });
  }

  deleteOneRegister () {
    // The character ID that we will plug into the API's URL
    const charId = $('#character-id-delete').val();

    $.ajax({
      method: 'DELETE',
      url: `https://ih-api.herokuapp.com/characters/${charId}`,
      success: () => {
        console.log('Delete SUCCESS!');
        $('#delete-one').css("background-color", "green");
      },
      error: () => {
        $('#delete-one').css("background-color", "red");
        handleError
      }
    });
  }
}
