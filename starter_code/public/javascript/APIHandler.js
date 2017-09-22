class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  $.ajax(
    {
      url: 'https://ih-api.herokuapp.com/characters/',
      method: 'GET',

      success: (characterList) => {
        characterList.forEach((oneCharacter) => {
        $('.characters-container').append(`
            <div class="character-info">
                <div class="id"> ID: ${oneCharacter.id} </div>
                <div class="name">Name: ${oneCharacter.name} </div>
                <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
                <div class="debt">Debt: ${oneCharacter.debt}</div>
                <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
            </div>
              `);
            });
          },

      error: (errorInfo) => {
        console.log(errorInfo);
      }

  });

}



  getOneRegister () {

    const characterId = $('input[name=character-id]').val();

    $.ajax(
      {
        url: 'https://ih-api.herokuapp.com/characters/' + characterId,
        method: 'GET',

        success: (oneCharacter) => {
          $('.characters-container').append(`
              <div class="character-info">
                  <div class="id"> ID: ${oneCharacter.id} </div>
                  <div class="name">Name: ${oneCharacter.name} </div>
                  <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
                  <div class="debt">Debt: ${oneCharacter.debt}</div>
                  <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
              </div>
                `);
            },

        error: (errorInfo) => {
          console.log(errorInfo);
        }

    });
  }

  createOneRegister (characterSubmission) {

    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/',
      method: 'POST',

      data: characterSubmission,

      success: (postResult) => {

        $('#send-data').removeClass('failed');
        $('#send-data').addClass('active');
      },

      error: (errorInfo) => {
        $('#send-data').removeClass('active');
        $('#send-data').addClass('failed');
      }
    });
  }

  updateOneRegister (updateSubmission) {

    const characterId = $('input[name=chr-id]').val();
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/' + characterId,
      method: 'PATCH',

      data: updateSubmission,

      success: (postResult) => {

        $('#edit-data').removeClass('failed');
        $('#edit-data').addClass('active');
      },

      error: (errorInfo) => {
        $('#edit-data').removeClass('active');
        $('#edit-data').addClass('failed');
      }
    });
  }

  deleteOneRegister () {

    const characterId = $('input[name=character-id-delete]').val();

    $.ajax(
      {
        url: 'https://ih-api.herokuapp.com/characters/' + characterId,
        method: 'DELETE',

        success: () => {
          $('#delete-one').removeClass('failed');
          $('#delete-one').addClass('active');
            },

        error: (errorInfo) => {
          $('#delete-one').removeClass('active');
          $('#delete-one').addClass('failed');
        }

    });
  }
}
