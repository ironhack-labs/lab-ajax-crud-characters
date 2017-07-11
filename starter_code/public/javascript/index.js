const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const charNum = $('#charId').val();
    charactersAPI.getOneRegister(charNum);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const deleteCharacterId = $('#deleteCharId').val();
    console.log('USER INPUTTED' + deleteCharacterId);
    // call the function that makes the AJAX request
    charactersAPI.deleteOneRegister(deleteCharacterId);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const updatedInfo = {
    name: $('#updateName').val(),
    weapon: $('#updateWeapon').val(),
    occupation: $('#updateOccupation').val()
  };

  // retrieve the character id from the input
  const characterId = $('#updateCharacterId').val();
  console.log('USER INPUTTED' + characterId);
  // call the function that makes the AJAX request
  charactersAPI.updateOneRegister(characterId, updatedInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo = {
      name: $('#postCharacterName').val(),
      occupation: $('#postCharacterOccupation').val(),
      weapon: $('#postCharacterWeapon').val()
    };
    charactersAPI.createOneRegister(characterInfo);
  });

});
