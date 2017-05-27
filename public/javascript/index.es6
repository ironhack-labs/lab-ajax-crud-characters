
const charactersAPI = new APIHandler();


$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList ();

    // h-api.herokuapp.com/characters
  });


  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister ($('.operation input').val());
                                  //      |
                                  // form input name
// ih-api.herokuapp.com/characters/:id
  });




  $('#delete-one').on('click', (e) => {
    $('*').removeClass('success-info error-info just-pressed');
    // adds class to clicked button
     $(e.currentTarget).addClass('just-pressed');
    charactersAPI.deleteOneRegister ($('.operation-edit input').val());
                                        //      |
                                        // form input name

// ih-api.herokuapp.com/characters/:id
  });



// ih-api.herokuapp.com/characters/:id

$('#edit-character-form').on('submit', (e) => {
  event.preventDefault();
  $('*').removeClass('success-info error-info just-pressed');
    // adds class tp button on form
   $(e.currentTarget).find('button').addClass('just-pressed');
  const updateInfo = {
    name: $('#edit-name').val(),
    occupation: $('#edit-occupation').val(),
    weapon: $('#edit-weapon').val(),
    debt: $('#edit-debt').prop("checked"),
  };

  charactersAPI.updateOneRegister (updateInfo);
});

  // // The character ID that we will plug into the API's URL
  // const charId = $('#character-id-input').val();
  // });


  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    $('*').removeClass('success-info error-info just-pressed');

    // adds class tp button on form
     $(e.currentTarget).find('button').addClass('just-pressed');
// ih-api.herokuapp.com/characters
const characterInfo = {
    name: $('#name').val(),
    occupation: $('#occupation').val(),
    weapon: $('#weapon').val(),
    debt: $('#debt').prop("checked"),
  };
  charactersAPI.createOneRegister(characterInfo);
});


});
