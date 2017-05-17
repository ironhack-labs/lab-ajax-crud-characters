class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}


//method to handle ajax request and be called in APIHandler
_ajax(addToBaseURL, callMethod, callback, postedData) {
// addToBaseURL   = append this text to base URL
// callMethod     = GET, POST, DELETE, PUT, etc....
// callback       = whatever response we get from the request
// postedData     = the data you want to send to the server

  $.ajax({
    url:      this.BASE_URL+addToBaseURL,
    method:   callMethod,
    data:     postedData,
    success:  loadCharacters,
    error:    errorHandler
  });

} //end of the _ajax private method


//on success of ajax request we need to get the data, in this case the characters
function loadCharacters(charList) { //"charList" is actually the callback/response of the request
  charList.forEach((character) => { //each object pulled from callback/response would be "character"
    //newCharacter creates the HTML to display the characters/objects gathered from request
    //we were already given the file structure so I am going to append the results to the 'characters-container'
    const newCharacter =
      $('.characters-container').append(`
      <li>
        <span class ="charID">          ${character.id} </span>
        <span class ="charName">        ${character.name} </span>
        <span class ="charOccupation">  ${character.occupation} </span>
        <span class ="charWeapon">      ${character.weapon} </span>
      </li>
      `);

  });
  // in the event that there is an error
  function errorHandler() {

  }
} //end of loadCharacters
