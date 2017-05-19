let objectReturned;
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList (callback) {
    this._ajax("/characters", "GET", callback);
    //not going to lie the use of "this" was inspired from elsewhere.

  }

  getOneRegister (id, callback) {
    this._ajax(`/characters/${id}`, "GET", callback);

  }

  createOneRegister (newCharacter, callback) {
    this._ajax(`/characters/`, "POST", newCharacter, callback);
  }

  updateOneRegister (id, editedChar, callback) {
    this._ajax(`/characters/${id}`, "PUT", editedChar, callback);
  }

  deleteOneRegister (id, callback) {
    this._ajax(`/characters/${id}`, "DELETE", callback);
  }



//method to handle ajax request and be called in APIHandler
_ajax(addToBaseURL, callMethod, postedData) {
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





} //end of APIHandler

//on success of ajax request we need to get the data, in this case the characters
function loadCharacters(postResponse) { //"charList" is actually the callback/response of the request
  // before loading we should clear the list using jquery
  // this is pretty much innerhtml for jquery
  $('.characters-container').html('');
  console.log('The Request Worked here is the response...');
  console.log(postResponse);

  if (postResponse.length > 1) {
    postResponse.forEach((character) => { //each object pulled from callback/response would be "character"
      //newCharacter creates the HTML to display the characters/objects gathered from request
      //we were already given the file structure so I am going to append the results to the 'characters-container'
      const newCharacter =
        $('.characters-container').append(`
          <div class="character-info">
          <div class ="charID">          ${character.id} </div>
          <div class ="charName">        ${character.name} </div>
          <div class ="charOccupation">  ${character.occupation} </div>
          <div class ="charWeapon">      ${character.weapon} </div>
          </div>
        `);

    }); //close forEach
  } else {
    $('.characters-container').append(`
      <div class="character-info">
      <div class ="charID">          ${postResponse.id} </div>
      <div class ="charName">        ${postResponse.name} </div>
      <div class ="charOccupation">  ${postResponse.occupation} </div>
      <div class ="charWeapon">      ${postResponse.weapon} </div>
      </div>
    `);

  }

} //end of loadCharacters

// in the event that there is an error
// it just receives whatever error the ajax request comes back width
// so basically all you have to do is print it out to the console so that you know what is going on
function errorHandler(err) {
  console.log("Things have gone array...get it? Array?");
  console.log(err);

}
