const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    let idInput = $('.id-input').val();
    charactersAPI.getOneRegister(idInput);
    $(this).trigger('reset');
  });

  $('#delete-one').on('click', (e) => {
    let deleteInput = $('.delete-input').val();
    charactersAPI.deleteOneRegister(deleteInput);
    $(this).trigger('reset');
  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    const charId = $('.id-update').val();
    const updateInfo = {
      name: $('.name-update').val(),
      occupation: $('.occupation-update').val(),
      weapon: $('.weapon-update').val(),
      debt: $('.debt-update').val()
    };
    charactersAPI.updateOneRegister(charId, updateInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    console.log('hello');
    const characterInfo = {
      name: $('.name-input').val(),
      occupation: $('.occupation-input').val(),
      weapon: $('.weapon-input').val(),
      debt: $('.debt-input').val()
    };

    charactersAPI.createOneRegister(characterInfo);
  });
});
