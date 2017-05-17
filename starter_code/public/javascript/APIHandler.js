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
      success : showFeedback,
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
      success : showFeedback,
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
      success : showFeedback,
      error   : handleError,
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
      success : showFeedback,
      error   : handleError,
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
      success : showFeedback,
      error   : handleError,
    });
  }
}

//******************************************************************
// FUNCTIONS here ...
//******************************************************************
function showFeedback (postResponse) {
  console.log('request success');
  console.log(postResponse);
}

function handleError (err) {
  console.log('Error !!!');
  console.log(err);
}
