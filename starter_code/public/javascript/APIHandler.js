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
      $.ajax({
        url: 'http://ih-api.herokuapp.com/characters/:id',
        method: 'GET',
        success: function(response) {
        },
        error: function(err) {
          console.log(err);
        }
      });
      // Verb: GET, Route: "/characters/:id"
      // It receives the character ID as a parameter (route)
      // It returns the character with the indicated id
      // It returns JSON
    }

    createOneRegister() {
      // Verb: POST, Route: "/characters"
      // It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
      // It returns the created character if there are no errors
      // It returns the wrong fields if there is some error
      // It returns JSON
    }

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
