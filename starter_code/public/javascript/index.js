// APIHandler Object
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

  // Get all the characters info && display them
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  // Get a single character info && display them
  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    let characterID = $('#fetch-one-character').val();
    console.log(characterID);
    charactersAPI.getOneRegister (characterID);
    cleanInput();
  });

  // Delete a single character through his id && display them
  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    let characterID = $('#delete-one-character').val();
    console.log(characterID);
    charactersAPI.deleteOneRegister(characterID);
    cleanInput();
  });

  // Update a single character through his id && display them
  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      id         : $('#edit-id').val(),
      name       : $('#edit-name').val(),
      occupation : $('#edit-occupation').val(),
      weapon     : $('#edit-weapon').val(),
      debt       : $('#edit-debt').val()
    };
    console.log(characterInfo);
    charactersAPI.updateOneRegister(characterInfo);
    cleanInput();
  });

  // Create a single character posting the data && display them
  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    
    const characterInfo = {
      name       : $('#new-name').val(),
      occupation : $('#new-occupation').val(),
      weapon     : $('#new-weapon').val(),
      debt       : $('#new-debt').val()
    };
    console.log(characterInfo);
    charactersAPI.createOneRegister(characterInfo);
    cleanInput();
  });

  //*********************************************************
  // cleanInput() : Clean all input in the form
  //*********************************************************
  function cleanInput() {
    $('#fetch-one-character').val('');
    $('#new-name').val('');
    $('#new-occupation').val('');
    $('#new-weapon').val('');
    $('#new-debt').val('');
    $('#edit-id').val('');
    $('#edit-name').val('');
    $('#edit-occupation').val('');
    $('#edit-weapon').val('');
    $('#edit-debt').val('');
    $('#delete-one-character').val('');
  }
});
