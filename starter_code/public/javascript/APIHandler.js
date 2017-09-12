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
        // error:   handleError
      });
  }


  // showFeedback (postResponse) {
  //     console.log(characterInfo);
  //     const newCharacterHtml = `
  //       <li>
  //         <h3> ${postResponse.name} </h3>
  //         <p> Id: ${postResponse.idation} </p>
  //         <p> Occupation: ${postResponse.occupation} </p>
  //         <p> Weapon: ${postResponse.weapon} </p>
  //       </li>
  //     `;
  //
  //     $('#characters-list').append(newCharacterHtml);
  // }



    updateOneRegister() {
      // Verb: PATCH/PUT, Route: "/characters/:id"
      // It receives the character id as a parameter (route)
      // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
      // All the fields are optionals
      // It returns the updated character if there are no errors
      // It returns "Character not found" if there is no character with the indicated id
      // It returns JSON / text
    }

    deleteOneRegister() {
      // Verb: DELETE, Route: "/characters/:id"
      // It receives the character id as a parameter (route)
      // It returns "Character has been successfully deleted" if there are no errors
      // It returns "Character not found" if there is no character with the indicated id
      // It returns text
    }
  }
