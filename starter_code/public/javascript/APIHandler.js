class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters",
      method: "GET",
      success: showFeedback,
      error:   handleError
    })
    function showFeedback (postResponse) {
      console.log('post success');
      console.log(postResponse);
    }

    function handleError (err) {
      console.log('Oh no! Error:');
      console.log(err);
    }
  }

  getOneRegister (id) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/" + id,
      method: "GET",
      success: showFeedback,
      error:   handleError
    })
      function showFeedback (postResponse) {
        console.log('post success');
        console.log(postResponse);
      }

      function handleError (err) {
        console.log('Oh no! Error:');
        console.log(err);
      }
  }

  createOneRegister () {
    console.log('form submit');
   const characterInfo = {
       name:       $('#the-name-input').val(),
       occupation:  $('#the-occupation-input').val(),
       weapon:      $('#the-weapon-input').val(),
       debth:        $('#the-debt-input').val()
     };

     $.ajax({
       method:  'POST',
       url:     'http://ih-crud-api.herokuapp.com/characters',
       data:    characterInfo,
       success: showFeedback,
       error:   handleError
     });
     function showFeedback (postResponse) {
       console.log('post success');
       console.log(postResponse);
     }

     function handleError (err) {
       console.log('Oh no! Error:');
       console.log(err);
     }
  }

  updateOneRegister (id) {
    const updateInfo = {
        name:       $('#character-edit-name').val('#the-name-input'),
        occupation:  $('#character-edit-occupation').val('#the-occupation-input'),
        weapon:      $('#character-edit-weapon').val('#the-weapon-input'),
        debt:        $('#character-edit-debt').val()
      };

      const charId = $('#character-id-edit').val();

    $.ajax({
      method: 'PATCH',
      url: `http://ih-crud-api.herokuapp.com/characters/${charId}`,
      data: updateInfo,
      success: (patchResponse) => {
        console.log('Update SUCCESS!');
        console.log(patchResponse);
      },
      error: handleError
    });
    function showFeedback (postResponse) {
      console.log('post success');
      console.log(postResponse);
    }

    function handleError (err) {
      console.log('Oh no! Error:');
      console.log(err);
    }
  }

  deleteOneRegister (id) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/" + id,
      method: "DELETE",
      data: {
          name:       $('#the-name-input').val(),
          occupation:  $('#the-occupation-input').val(),
          weapon:      $('#the-weapon-input').val(),
          debth:        $('#the-debt-input').val()
        },
      success: showFeedback,
      error:   handleError
    })
    function showFeedback (postResponse) {
      console.log('post success');
      console.log(postResponse);
    }

    function handleError (err) {
      console.log('Oh no! Error:');
      console.log(err);
    }
  }
}
