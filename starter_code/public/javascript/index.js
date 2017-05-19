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
    charactersAPI.deleteOneRegister($('input[name= "character-id-delete"]').val());
  });

  $('#edit-character-form').on('submit', (e) => {
      e.preventDefault();
      const editCharObject = {
        // I don't like the fact that I am repeating myself here
        // but the fields for this form could be different need to have the ability to switch it out
        // not sure why but you have to fine tune the jQuery selection when updating information/doing PUTS
        name:         $('#edit-character-form input[name= "name"]').val(),
        occupation:   $('#edit-character-form input[name= "occupation"]').val(),
        weapon:       $('#edit-character-form input[name= "weapon"]').val(),
        debt:         $('#edit-character-form input[name= "debt"]').prop("checked"),
        id:           $('#edit-character-form input[name= "chr-id"]').val()
      };

      let response = console.log(e);
      charactersAPI.updateOneRegister(editCharObject.id, editCharObject, response);
  });

  //seclect the new character form
  $('#new-character-form').on('submit', (e) => {
      //prevent the form/button from refreshing the page
      e.preventDefault();
      // gathers all of the data entered in the form and creates an object var
      const newCharObject = {
        name:         $('input[name= "name"]').val(),
        occupation:   $('input[name= "occupation"]').val(),
        weapon:       $('input[name= "weapon"]').val(),
        debt:         $('input[name= "debt"]').prop("checked")  //on this one val won't work cause its a checkbox
      };
      // submits the data to the APIHandler... which will create a ajax request with the var
      charactersAPI.createOneRegister(newCharObject);
  });
});
