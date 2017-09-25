const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
     getAllCharacters();
  })

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();

    const idFromInput = $('input[name="character-id"]').val();
    getOneCharacter(idFromInput);
  })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })
})

function getAllCharacters(characters) {
  // $.ajax() is a jQuery function
  $.ajax(
    // 1 argument -> settings object
    {
      url: 'https://ih-api.herokuapp.com/characters/',
      method: 'GET',

      data:characters,

      //what to do when everything worked (we get the data)
      success: (infoFromApi)=> {
        // start by displaying variable you got from API
        console.log('Character Fetch Success! 🙌🏽');
        console.log(infoFromApi);
        infoFromApi.forEach((oneCharacter) => {

          $('.characters-container').append(`
              <div class="character-info">
                <div>Name: ${oneCharacter.name}</div>
                <div>Occupation: ${oneCharacter.occupation}</div>
                <div> Debt: ${oneCharacter.debt}</div>
                <div> Weapon: ${oneCharacter.weapon}</div>
              </div>
          `);
        })

      //what to do when the request errors (we did )
      error:(errorInfo) => {
        console.log('Character fetch Error 🚨');
        console.log(errorInfo);
      }
    }
  }
);
}

function getOneCharacter(charId) {
  // $.ajax() is a jQuery function
  $.ajax(
    // 1 argument -> settings object
    {
      url: 'https://ih-api.herokuapp.com/characters/' + charId + '/',
      method: 'GET',

      //what to do when everything worked (we get the data)
      success: (singleChar)=> {
        // start by displaying variable you got from API
        console.log('Character Fetch Success! 🙌🏽');
        console.log(singleChar);


        $('.characters-container').append(`
          <div>
            <div>${singleChar.name}</div>
            <div>${singleChar.occupation}</div>
            <div>${singleChar.debt}</div>
            <div>${singleChar.weapon}</div>
        </div>
        `);
      },

      //what to do when the request errors (we did )
      error:(errorInfo) => {
        console.log('Character fetch Error 🚨');
        console.log(errorInfo);
      }
    }
  );
}

function deleteOneCharacter(charId) {
  // $.ajax() is a jQuery function
  $.ajax(
    // 1 argument -> settings object
    {
      url: 'https://ih-api.herokuapp.com/characters/' + charId + '/',
      method: 'DELETE',

      //what to do when everything worked (we get the data)
      success: (singleChar)=> {
        // start by displaying variable you got from API
        console.log('Character Fetch Success! 🙌🏽');
        console.log(singleChar);


        $('.characters-container').append(`
          <div>
            <div>${singleChar.name}</div>
            <div>${singleChar.occupation}</div>
            <div>${singleChar.debt}</div>
            <div>${singleChar.weapon}</div>
        </div>
        `);
      },

      //what to do when the request errors (we did )
      error:(errorInfo) => {
        console.log('Character fetch Error 🚨');
        console.log(errorInfo);
      }
    }
  );
}
