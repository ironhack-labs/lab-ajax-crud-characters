const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  // -------------------Fetching-all-----------------------------
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();

  });

  // --------------------Fetching-one-------------------------------
  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getOneRegister($('input[name= "character-id"]').val());

  });
// --------------------------------delete-one----------------------------
  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.deleteOneRegister($('input[name= "character-id-delete"]').val());
  });

  // --------------------Edit----------------------------------------
  $('#edit-character-form').on('submit', (e) => {
      e.preventDefault();
      const editCharObject = {
        name:         $('#edit-character-form input[name= "name"]').val(),
        occupation:   $('#edit-character-form input[name= "occupation"]').val(),
        weapon:       $('#edit-character-form input[name= "weapon"]').val(),
        debt:         $('#edit-character-form input[name= "debt"]').prop("checked"),
        id:           $('#edit-character-form input[name= "chr-id"]').val()
      };

      let response = console.log(e);
      charactersAPI.updateOneRegister(editCharObject.id, editCharObject, response);
  });

  // --------------------NEW-------------------------------------
  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      const newCharObject = {
        name:         $('input[name= "name"]').val(),
        occupation:   $('input[name= "occupation"]').val(),
        weapon:       $('input[name= "weapon"]').val(),
        debt:         $('input[name= "debt"]').prop("checked")
      };
      charactersAPI.createOneRegister(newCharObject);
  });
});
