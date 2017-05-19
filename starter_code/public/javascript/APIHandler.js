class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //*************************************************************
  // getFullList (): Gets all the characters info from API
  //*************************************************************
  getFullList () {
    $.ajax({
      url     : this.BASE_URL + "/characters",
      method  : "GET",
      success : displayCharacterCards,
      error   : handleError,
    });
  }

  //*************************************************************
  // getOneRegister () : Get a single character info from API
  //*************************************************************
  getOneRegister (id) {
    $.ajax({
      url     : this.BASE_URL + "/characters/" + id,
      method  : "GET",
      success : displayOneCharacter,
      error   : handleError,
    });
  }

  //*****************************************************************
  // createOneRegister () : Create a single character info from API
  //*****************************************************************
  createOneRegister (characterInfo) {
    console.log(characterInfo);
    $.ajax({
      url     : this.BASE_URL + "/characters",
      data    : characterInfo,
      method  : "POST",
      // pass two parameters to the CB on success && error
      success : (response) => {
                  showFeedback( response, 'create');
                },
      error   : (response) => {
                  handleError( response, 'create');
                },
    });
  }

  //*****************************************************************
  // updateOneRegister () : Edit a single character through his id
  //*****************************************************************
  updateOneRegister (characterInfo) {
    console.log(characterInfo);
    $.ajax({
      url     : this.BASE_URL + "/characters/" + characterInfo.id,
      data    : characterInfo,
      method  : "PATCH",
      // pass two parameters to the CB on success && error
      success : (response) => {
                  showFeedback( response, 'update');
                },
      error   : (response) => {
                  handleError( response, 'update');
                },
    });
  }

  //******************************************************************
  // deleteOneRegister () : Delete a single character through his id
  //******************************************************************
  deleteOneRegister (id) {
    console.log(id);
    $.ajax({
      url     : this.BASE_URL + "/characters/" + id,
      method  : "DELETE",
      // pass two parameters to the CB on success && error
      success : (response) => {
                  showFeedback( response, 'delete');
                },
      error   : (response) => {
                  handleError( response, 'delete');
                },
    });
  }
}


//*****                  FUNCTIONS here ...                    *****


//******************************************************************
// displayCharacterCards()
// display all characters from the API
//******************************************************************
function displayCharacterCards(postResponse) {
  // first empty any append html so get ready to display charcaters
  clearCards();
  //$('.characters-container').empty();

  postResponse.forEach( (character, index) => {
    // define the html to append for each character    
    var htmlToAppend = 
    "<div class=\"character-info\">" +
      "<div class=\"block\">" + 
          "<label id=\"id-" + index + "\">Id:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"name-" + index + "\">Name:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"occupation-" + index + "\">Occupation:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"debt-" + index + "\">Debt:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"weapon-" + index + "\">Weapon:</label>" + 
      "</div>" +
    "</div>";

    $('.characters-container').append(htmlToAppend);
    
    // append values of each character
    appendCharacterElements(character, index);
    
  }, this);
}

//******************************************************************
// displayOneCharacter()
// display one characters from the API
// when it is called through his id
//******************************************************************
function displayOneCharacter(postResponse) {
  let index = 0;
  clearCards();

  var htmlToAppend = 
    "<div class=\"character-info\">" +
      "<div class=\"block\">" + 
          "<label id=\"id-" + index + "\">Id:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"name-" + index + "\">Name:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"occupation-" + index + "\">Occupation:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"debt-" + index + "\">Debt:</label>" + 
      "</div>" + 
      "<div class=\"block\">" + 
          "<label id=\"weapon-" + index + "\">Weapon:</label>" + 
      "</div>" +
    "</div>";

  $('.characters-container').append(htmlToAppend);

  // append values of each character
  appendCharacterElements(postResponse, index);

}

//******************************************************************
// appendCharacterElements()
// using jquery append all element of a character
// call from displayCharacterCards()
//******************************************************************
function appendCharacterElements(character, index) {
  $('#id-' + index).append(`<label class="id">${character.id}</label>`);
  $('#name-' + index).append(`<label class="name">${character.name}</label>`);
  $('#occupation-' + index).append(`<label class="occupation">${character.occupation}</label>`);
  $('#debt-' + index).append(`<label class="debt">${character.debt}</label>`);
  $('#weapon-' + index).append(`<label class="weapon">${character.weapon}</label>`);
}

//******************************************************************
// clearCards()
// remove html appended when displaying characters
// so the cards are not overwrite
//******************************************************************
function clearCards() {
  $('.characters-container').empty(); 
}

//******************************************************************
// showFeedback()
// log successful action from API
//******************************************************************
function showFeedback(postResponse, action) {
  console.log('post success');
  console.log(postResponse);

  // change button background to green
  switch (action) {
    case 'delete':
      $('#delete-one').css({
        'background-color': 'green'    
      });      
      break;

    case 'update':
      $('#update-one').css({
        'background-color': 'green'    
      });   
      break;

      case 'create':
      $('#create-one').css({
        'background-color': 'green'    
      });     
      break;

    default:
      break;
  }
}

//******************************************************************
// handleError()
// log any error from the API
//******************************************************************
function handleError (err, action) {
  console.log('Error !!!');
  console.log(err);

  // change button background to green
  switch (action) {
    case 'delete':
      $('#delete-one').css({
        'background-color': 'red'    
      });      
      break;

    case 'update':
      $('#update-one').css({
        'background-color': 'red'    
      });   
      break;

      case 'create':
      $('#create-one').css({
        'background-color': 'red'    
      });     
      break;

    default:
      break;
  }
}
