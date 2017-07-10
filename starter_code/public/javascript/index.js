const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const characterId = $('#character-id').val();
    charactersAPI.getOneRegister(characterId);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const characterId = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(characterId);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const characterId = $('#chr-id').val();

    const editCharacter = {
      name: $("#editName").val(),
      weapon: $("#editWeapon").val(),
      occupation: $("#editOccupation").val(),
      debt: $("#editDebt").is(':checked')
    };

    charactersAPI.updateOneRegister(characterId, editCharacter);
  });


  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const newCharacter = {
      name: $("#newName").val(),
      weapon: $("#newWeapon").val(),
      occupation: $("#newOccupation").val(),
      debt: $("#newDebt").is(':checked')
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});
