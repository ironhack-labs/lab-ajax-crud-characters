class APIHandler {
  constructor () {
    this.baseURL = "http://ih-api.herokuapp.com";
  }



  loadCharacters(theList){
    $('.character-info').remove();

      theList.forEach((eachCharacter) => {
        const newCharacter = `
          <div class="character-info">
          <div > Id: <span id="info"> ${eachCharacter.id} </span> </div>
          <div> Name: <span id="info"> ${eachCharacter.name} </span> </div>
          <div> Occupation: <span id="info"> ${eachCharacter.occupation} </span> </div>
          <div> Weapon: <span id="info"> ${eachCharacter.weapon} </span> </div>
          <div> Debt: <span id="info"> ${eachCharacter.debt} </span> </div>
          </div>
            `;
            $('.characters-container').append(newCharacter);
          });
        }


    loadCharacter(theCharacter){
        $('.character-info').remove();
            $('.characters-container').append(`
            <div class="character-info">
            <div > Id: <span id="info"> ${theCharacter.id} </span> </div>
            <div> Name: <span id="info"> ${theCharacter.name} </span> </div>
            <div> Occupation: <span id="info"> ${theCharacter.occupation} </span> </div>
            <div> Weapon: <span id="info"> ${theCharacter.weapon} </span> </div>
            <div> Debt: <span id="info"> ${theCharacter.debt} </span> </div>
            </div>
              `);
            }




  showFeedback (postResponse) {
          // to erase all input fields:
    $(':input[type=text]').val('');
    $('.just-pressed').addClass('success-info');

    //  $("#delete-one", "#edit-character-form", "#new-character-form" ).addClass("success-info");
    // event.Target.color = "green";
    console.log('post success');
    console.log(postResponse);
  }



  handleError (err) {
    // to erase all input fields:
  $(':input[type=text]').val('');
  $('.just-pressed').addClass('error-info');

    // $("#delete-one").addClass("error-info");
    // $('#this.button ').addClass('error-info');
    // $('#delete-one, #edit-character-form, #new-character-form ').addClass('error-info');
    console.log('Oh no! Error:');
    console.log(err);
  }


  // if this.showFeedback {
  //   #delete-one, #edit-character-form, #new-character-form
  //   <div class="success-info">;
  //
  //   else {
  //     <div class="error-info">;
  //     .error-info
  //   }
  // }


//log all characters
getFullList () {
$.ajax({
  url: `${this.baseURL}/characters`,
  method: "GET",
  success: this.loadCharacters,
  error: this.handleError
});
  }

//log character by ID field
  getOneRegister (id) {
$.ajax({
  url: `${this.baseURL}/characters/${id}`,
  method: "GET",
  success: this.loadCharacter,
  error: this.handleError
});
  }


//create new character
  createOneRegister(characterInfo) {
  $.ajax({
    method:  'POST',
    url:     `${this.baseURL}/characters`,
    data:    characterInfo,
    success: this.showFeedback,
    error: this.handleError
    // success: this.showFeedback +  $("#send-data").addClass("success-info"),
    // error:   this.handleError +  $("#send-data").addClass("error-info")
  });
  }


//edit one character including ID field

  updateOneRegister (updateInfo) {
      const charId =  $('#edit-id').val();

$.ajax({
      // Notice that we are using PATCH. You could also use PUT.
    method: 'PATCH',
    // `${this.baseURL}/characters/:id`
    url: `${this.baseURL}/characters/${charId}`,
    data: updateInfo,
    // success: this.showFeedback +  $("#edit-data").addClass("success-info"),
    // error:   this.handleError +  $("#edit-data").addClass("error-info")
    success: this.showFeedback,
    error: this.handleError
  });

  }


//delete by character ID
  deleteOneRegister (deleteInfo) {
    const delId =  $('.operation-delete input').val();


$.ajax({
  // `${this.baseURL}/characters/:id`
  url: `${this.baseURL}/characters/${delId}`,
  // url: `${this.baseURL}/characters/${$('.operation-delete input').val()}`,
  method: "DELETE",
  data: deleteInfo,
  // success: [this.showFeedback,$('*').removeClass('success-info'), $('*').removeClass('error-info'), $("#delete-one").addClass("success-info")],
  // error: [this.handleError, $('*').removeClass('success-info'), $('*').removeClass('error-info'), $("#delete-one").addClass("error-info")]
  success: this.showFeedback,
  error: this.handleError
});




}
}
