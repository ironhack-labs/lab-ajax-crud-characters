class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax(
    {
      url: 'https://ih-crud-api.herokuapp.com/characters/',
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
        url: 'https://ih-crud-api.herokuapp.com/characters/' + characterId,
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
      url: 'https://ih-crud-api.herokuapp.com/characters/',
      method: 'POST',

      data: characterSubmission,

      success: (postResult) => {

        $('.submit-button').removeClass('failed');
        $('.submit-button').addClass('active');
      },

      error: (errorInfo) => {
        $('.submit-button').removeClass('active');
        $('.submit-button').addClass('failed');
      }
    });
  }

  updateOneRegister (updateSubmission) {

    const characterId = $('input[name=chr-id]').val();
    $.ajax({
      url: 'https://ih-crud-api.herokuapp.com/characters/' + characterId,
      method: 'PATCH',

      data: updateSubmission,

      success: (postResult) => {

        $('.submit-button').removeClass('failed');
        $('.submit-button').addClass('active');
      },

      error: (errorInfo) => {
        $('.submit-button').removeClass('active');
        $('.submit-button').addClass('failed');
      }
    });
  }

  deleteOneRegister () {
    const characterId = $('input[name=character-id-delete]').val();

       $.ajax(
         {
           url: 'https://ih-crud-api.herokuapp.com/characters/' + characterId,
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
