class APIHandler {
  constructor () {
    this.baseURL = "http://ih-api.herokuapp.com";
  }


  showFeedback (postResponse) {
    console.log('post success');
    console.log(postResponse);
  }

  handleError (err) {
    console.log('Oh no! Error:');
    console.log(err);
  }


//log all characters
getFullList () {
$.ajax({
  url: `${this.baseURL}/characters`,
  method: "GET",
  success: this.showFeedback,
  error: this.handleError
});
  }

//log character by ID field
  getOneRegister (id) {
$.ajax({
  url: `${this.baseURL}/characters/${id}`,
  method: "GET",
  success: this.showFeedback,
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
    error:   this.handleError
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
    success: this.showFeedback,
    error:   this.handleError
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
  // data: deleteInfo,
  success: this.showFeedback,
  error: this.handleError
});


}
}
