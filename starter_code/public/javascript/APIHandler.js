class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

getFullList () {
    $.ajax({
      url: "http://ih-api.herokuapp.com/characters",
      method: "GET",
      success: function (response) {
        printTheFullList(response);
      },
      error: function (err) {
        console.log(err);
        },
      });
}

  getOneRegister (id) {
    $.ajax({
  url: "http://ih-api.herokuapp.com/characters/"+id,
  method: "GET",
  success: function (response) {
  bringTheCharacter(response);
  },
  error: function (err) {
    console.log(err);
    },
  });
  }

createOneRegister() {
    let name =       $('#create-name').val();
    let occupacy =  $('#create-occupation').val();
    let debt =     $('#create-debt').val() === "on" ? true : false;
    let weapon =       $('#create-weapon').val();
    const characterInfo = { name: name, occupation: occupacy, debt: debt, weapon: weapon }
  console.log(characterInfo);
  console.log("creating element")
    $.ajax({
        // Notice that we are using POST
      type:    'POST',
      url:     'http://ih-api.herokuapp.com/characters',
        // The data key is for sending data in a POST, PUT or PATCH!
      data:    characterInfo,
      success: showFeedback,
      error:   handleError
    });
}

  updateOneRegister () {
    let id =       $('#update-id').val();
    let name =       $('#update-name').val();
    let occupacy =  $('#update-occupation').val();
    let debt =     $('#update-debt').val() === "on" ? true : false;
    let weapon =       $('#update-weapon').val();
    const characterInfo = { name: name, occupacy: occupacy, debt: debt, weapon: weapon }
  console.log(characterInfo);
  $.ajax({
      // Notice that we are using POST
    type:    'PATCH',
    url:     'https://ih-api.herokuapp.com/characters/'+id,
      // The data key is for sending data in a POST, PUT or PATCH!
    data:    characterInfo,
    success: showFeedback,
    error:   handleError
  });

  }

  deleteOneRegister() {
  let id =       $('#delete-id').val();
  $.ajax({
      // Notice that we are using POST
    type:    'DELETE',
    url:     'https://ih-api.herokuapp.com/characters/'+id,
      // The data key is for sending data in a POST, PUT or PATCH!
    success: showFeedback,
    error:   handleError
  });
  }
}

function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}
