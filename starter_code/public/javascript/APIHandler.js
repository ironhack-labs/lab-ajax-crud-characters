class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url: 'http://ih-api.herokuapp.com/characters',
      method: 'GET',
      success: function(response) {
        for (let i = 1; i < response.length; i++) {
          $('.characters-container').append($('.character-info').eq(0).clone());
          }
          $('.character-id').each(function(i) {
            $(this).text(response[i].id);
          });
          $('.character-name').each(function(i) {
            $(this).text(response[i].name);
          });
          $('.character-occupation').each(function(i) {
            $(this).text(response[i].occupation);
          });
          $('.character-debt').each(function(i) {
            $(this).text(response[i].debt);
          });
          $('.character-weapon').each(function(i) {
            $(this).text(response[i].weapon);
          });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

    getOneRegister() {
      var id = $('#character-id').val();
      $.ajax({
        url: 'http://ih-api.herokuapp.com/characters/' + id,
        method: 'GET',
        success: function(response) {
          $('.character-info').not(':first').remove();
          $('.character-id').text(response.id);
          $('.character-name').text(response.name);
          $('.character-occupation').text(response.occupation);
          $('.character-debt').text(response.debt);
          $('.character-weapon').text(response.weapon);
        },
        error: function(err) {
          console.log(err);
        }
      });
  }

    createOneRegister() {
      const characterInfo = {
        name:       $('#create-name').val(),
        occupation: $('#create-occupation').val(),
        weapon:     $('#create-weapon').val()
      };
        if ( $('#create-debt').is(':checked') ) {
          characterInfo.debt = true;
        }

      $.ajax({
        method:  'POST',
        url:     'https://ih-api.herokuapp.com/characters',
        data:    characterInfo,
        success: function(response) {
          console.log(response);
          $('#send-data').addClass('success-button');
        },
        error: function(err) {
          console.log(err);
          $('#send-data').addClass('fail-button');
        }
      });
  }


    updateOneRegister() {
        const updateInfo = {
          name: $('#update-name-input').val(),
          occupation: $('#update-occupation-input').val(),
          weapon: $('#update-weapon-input').val()
        };
        if ( $('#update-debt-input').is(':checked') ) {
          updateInfo.debt = true;
        }

        // The character ID that we will plug into the API's URL
        const charId = $('#character-id-input').val();

        $.ajax({
          method: 'PUT',
          url: `https://ih-api.herokuapp.com/characters/${charId}`,
          data: updateInfo,
          success: (patchResponse) => {
            console.log('Update SUCCESS!');
            console.log(patchResponse);
            $('#update-data').addClass('success-button');
          },
          error: function(err) {
            console.log(err);
            $('#update-data').addClass('fail-button');
        }
      })
    }

    deleteOneRegister() {
        var id = $('#character-id-delete').val();
        $.ajax({
          url: 'http://ih-api.herokuapp.com/characters/' + id,
          method: 'DELETE',
          success: function(response) {
            $('.character-info').remove();
            console.log("Character has been successfully deleted")
          },
          error: function(err) {
            console.log("Character not found" + id);
          }
        });

    }
  }
