function showFeedback (postResponse) {
  console.log('post success');
  console.log(postResponse);
}

function handleError (err) {
  console.log('Oh no! Error:');
  console.log(err);
}



class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  $.ajax({
    url: this.BASE_URL+'/characters',
    method: "GET",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  })
}

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+id,
      method: "GET",
      success: function (response) {
        console.log(response.name);
      },
      error: function (err) {
        console.log(err);
      },
    })

  }

  createOneRegister (info) {
    $.ajax({
      url: this.BASE_URL+'/characters',
      method: "POST",
      data:    info,
      success: (response) =>{
        console.log('success!');
        console.log(response);
      },
      error:   handleError
    })
  }


  updateOneRegister () {

  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+'/characters/'+id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    })
  }
}
