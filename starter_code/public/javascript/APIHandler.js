class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  // -------------------Fetching-all-----------------------------
  getFullList (callback) {
    this._ajax("/characters", "GET", callback);
  }

  // --------------------Fetching-one-------------------------------
  getOneRegister (id, callback) {
    this._ajax(`/characters/${id}`, "GET", callback);
  }

  // --------------------NEW-------------------------------------
  createOneRegister (newCharacter, callback) {
    this._ajax(`/characters/`, "POST", newCharacter, callback);
  }

  // --------------Edit----------------------------------------
  updateOneRegister (id, editedChar, callback) {
    this._ajax(`/characters/${id}`, "PUT", editedChar, callback);
  }

  deleteOneRegister (id, callback) {
    this._ajax(`/characters/${id}`, "DELETE", callback);
  }



_ajax(addToBaseURL, callMethod, postedData, callback) {


  $.ajax({
    url:      this.BASE_URL+addToBaseURL,
    method:   callMethod,
    data:     postedData,
    success:  loadCharacters,
    error:    errorHandler
  });

} //end of the _ajax private method

} //end of APIHandler

function loadCharacters(postResponse) {
  $('.characters-container').html('');
  console.log('Worked!');
  console.log(postResponse);

  $('.characters-container').append(`
    <div class="success-info">
      <p> Request Succesful</p>
    </div>
    `);

  if (postResponse.length > 1) {
    postResponse.forEach((character) => {
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

function errorHandler(err) {
  console.log("Yo something went wrong!");
  console.log(err);
  let errorMessage = err.responseJSON.error;
  $('.characters-container').html('');
  $('.characters-container').append(`
    <div class="error-info">
      <p> ${errorMessage} </p>
    </div>`
  );

}
