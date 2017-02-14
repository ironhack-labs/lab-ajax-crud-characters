/*jshint esversion:6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      type:    'POST',
      url:     this.BASE_URL+'/characters',
      data:    characterInfo,
      success: console.log(characterInfo),
      error:   handleError
    });
  }

  updateOneRegister (id,updateInfo) {
    $.ajax({
      type: 'PATCH',
      url: this.BASE_URL+'/characters/'+id,
      data: updateInfo,
      success: showFeedback,
      error: handleError
      });
    }

  deleteOneRegister (id) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL+'/characters/'+id,
      success: showFeedback,
      error: handleError
    });
  }
}
function showFeedback () {
  console.log('success');
}
function handleError (err) {
  console.log('Oh no! Error:');
}
