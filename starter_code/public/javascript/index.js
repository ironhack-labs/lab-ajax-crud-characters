const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();

    const characterId = $('#characterId').val();

    charactersAPI.getOneRegister(characterId);
  });

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const characterInfo = {
      name: $('#newCharacterName').val(),
      weapon: $('#newCharacterOccupation').val(),
      occupation: $('#newCharacterWeapon').val(),
      debt: $('#newCharacterDebt').val()
    };

    charactersAPI.createOneRegister(characterInfo);
  });
});
