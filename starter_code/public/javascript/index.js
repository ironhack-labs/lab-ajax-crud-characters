const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    //whenever you click on the fetch-all button get all of the objects
    e.preventDefault();
    charactersAPI.getFullList(); //do I need to pass a callback here??

  });

  $('#fetch-one').on('click', (e) => {
    // grab the information in the input and send it to the api handler that
    //will pull one result from the API
    e.preventDefault();
    charactersAPI.getOneRegister($('input[name= "character-id"]').val());

  });
  // delete an entry from the api by id, grab info in input and send to APIHandler
  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getOneRegister($('input[name= "character-id"]').val());
  });

  $('#edit-character-form').on('submit', (e) => {
      e.preventDefault();
      charactersAPI.deleteOneRegister($('input[name= "character-id-delete"]').val());
  });

  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      const newCharObject = {
        name:         $('input[name= "name"]').val(),
        occupation:   $('input[name= "occupation"]').val(),
        weapon:       $('input[name= "weapon"]').val(),
        id:           $('input[name= "debt"]').val(),
      };
      charactersAPI.createOneRegister(newCharObject.id, newCharObject);
  });
});
