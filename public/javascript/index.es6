
const charactersAPI = new APIHandler();


$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList ();
    // h-api.herokuapp.com/characters
  });


  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister ($('.operation input').val());
// ih-api.herokuapp.com/characters/:id
  });




  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister ($('.operation-edit input').val());
// ih-api.herokuapp.com/characters/:id
  });




// ih-api.herokuapp.com/characters/:id

$('#edit-character-form').on('submit', (event) => {
  event.preventDefault();

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
