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

  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const characterNewInfo = {
      name: $('#updatedCharacterName').val(),
      weapon: $('#updatedCharacterWeapon').val(),
      occupation: $('#updatedCharacterOccupation').val(),
      debt: $('#updatedCharacterDebt').val()
    };

    const characterId = $('#idOfCharacter').val();
    console.log(characterId);
    charactersAPI.updateOneRegister(characterId, characterNewInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const characterInfo = {
      name: $('#updatedCharacterName').val(),
      weapon: $('#updatedCharacterWeapon').val(),
      occupation: $('#updatedCharacterOccupation').val(),
      debt: $('#updatedCharacterDebt').val()
    };

    charactersAPI.createOneRegister(characterInfo);
  });

});//-------------END OF DOCUMENT READY--------------
