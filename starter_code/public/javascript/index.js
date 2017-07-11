const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const characterNumber = $('#character-id').val();
    charactersAPI.getOneRegister(characterNumber);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const characterDeleteNumber = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(characterDeleteNumber);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: $('#updateName').val(),
      occupation: $('#updateOccupation').val(),
      weapon: $('#updateWeapon').val(),
      debt: $('#hasDebt').val()
    };

    const characterId = $('#characterUpdateId').val();

    charactersAPI.updateOneRegister(characterId, updatedInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newCharInfo = {
      name: $('#newCharacterName').val(),
      occupation: $('#newCharacterOccupation').val(),
      weapon: $('#newCharacterWeapon').val(),
      debt: $('#newCharacterHasDebt').val()
    };

    charactersAPI.createOneRegister(newCharInfo);
  });
});
