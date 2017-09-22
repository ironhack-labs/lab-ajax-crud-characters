const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const charId = $('#fetch-input').val();
    charactersAPI.getOneRegister(charId);
  });

  $('#delete-one').on('click', (e) => {
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {


    const newCharacter = {
      name: $('#createName').val(),
      occupation: $('#createOccupation').val(),
      debt: $('#createDebt').val(),
      weapon: $('#createWeapon').val()
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});
