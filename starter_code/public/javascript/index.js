const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', () => {
    charactersAPI.getFullList("/characters");
  });

  $('#fetch-one').on('click', () => {
    let characterId = $('#id-search').val();
    charactersAPI.getOneRegister(characterId);
  });

  $('#delete-one').on('click', () => {
    let characterId = $('#delete-input').val();
    charactersAPI.deleteOneRegister(characterId);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    let characterId = $('#editID').val();

    let charName = $('#editName').val();
    let charOccupation = $('#editOcc').val();
    let charWeapon = $('#editWeapon').val();
    let charDebt;
    if ($('#editDebt').is(":checked")){charDebt = true;}else{charDebt = false;}

    let newEdit =  {
      name: charName,
      occupation: charOccupation,
      weapon: charWeapon,
      debt: charDebt,
    };

    charactersAPI.updateOneRegister(newEdit, characterId);

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let charName = $('#newName').val();
    let charOccupation = $('#newOcc').val();
    let charWeapon = $('#newWeapon').val();
    let charDebt;
    if ($('#newDebt').is(":checked")){charDebt = true;}else{charDebt = false;}

    let newCharacter = {
      name: charName,
      occupation: charOccupation,
      weapon: charWeapon,
      debt: charDebt,
    };
    charactersAPI.createOneRegister (newCharacter);
  });
});
