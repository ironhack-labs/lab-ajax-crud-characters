const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    //let inputSearchVal = $('#character-id').val();
    charactersAPI.getOneRegister($('#character-id').val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#id-delete').val());
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    var values = [];
      $('.new-character').each(function() {
          values.push($(this).val());
      });

      function check() {
        if($('new-debt').is(":checked")) {
          return "true";
        } else {
          return "false";
        }
      }

      let newChar = {
        name: values[0],
        occupation: values[1],
        weapon: values[2],
        debt: check(),
      };

      charactersAPI.createOneRegister(newChar);
  });

  $('#new-character-form').on('submit', (e) => {

  });
});
