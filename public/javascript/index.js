const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

  $('#fetch-all').click(() => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').click(() => {
    const id = $('.char-id').val();
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').click(() => {
    const id = $('.delete-id').val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').submit(() => {
    event.preventDefault();

    const charId = $('.char-updateid').val();
    const updateInfo = {
      name: $('.the-name-updateinput').val(),
      occupation: $('.the-occupation-updateinput').val(),
      weapon: $('.the-weapon-updateinput').val(),
      debt: $('.the-debt-updateinput').val()
    };

    charactersAPI.updateOneRegister(charId, updateInfo);
  });

  $('#new-character-form').submit(() => {
    event.preventDefault();

    const characterInfo = {
      name: $('.the-name-input').val(),
      occupation: $('.the-occupation-input').val(),
      weapon: $('.the-weapon-input').val(),
      debt: $('.the-debt-input').val()
    };

    charactersAPI.createOneRegister(characterInfo);
  });

});
