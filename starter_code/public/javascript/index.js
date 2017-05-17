const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    $('.characters-container').children().remove();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    let id = $('input[name="character-id"]').val();
      console.log(id);
      charactersAPI.getOneRegister(id);
  });

  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      var temp;
      if ($('input[name="debt"]').is(':checked')) {
        temp = true;
      } else {
        temp = false;
      }
      const characterInfo = {
        name: $('input[name="name"]').val(),
        occupation: $('input[name="occupation"]').val(),
        debt: temp,
        weapon: $('input[name="weapon"]').val()
      };
      console.log(characterInfo);
      charactersAPI.createOneRegister(characterInfo);
    });


  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();

  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister();

  });


});
