/*jshint esversion:6*/
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList("/characters");
  });

  $('#fetch-one').on('click', (e) => {
    let characterid = $('[name=character-id]').val();
    charactersAPI.getOneRegister("/characters/", characterid);
  });

  $('#delete-one').on('click', (e) => {
    let characterid = $('[name=character-id-delete]').val();
    charactersAPI.deleteOneRegister("/characters/", characterid);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let updateInfo = {
      name: $('#edit-character-form [name=name]').val(),
      occupation:$('#edit-character-form [name=occupation]').val(),
      weapon:$('#edit-character-form [name=weapon]').val(),
      debt:$('#edit-character-form [name=debt]').prop( "checked" ),
    };
    const charId = $('[name=chr-id]').val();
    console.log(updateInfo);
    console.log(charId);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let characterInfo = {
      name: $('#new-character-form [name=name]').val(),
      occupation:$('#new-character-form [name=occupation]').val(),
      weapon:$('#new-character-form [name=weapon]').val(),
      debt:$('#new-character-form [name=debt]').prop( "checked" ),
    };
    console.log(characterInfo);
    charactersAPI.createOneRegister ("/characters", characterInfo);
  });
});
