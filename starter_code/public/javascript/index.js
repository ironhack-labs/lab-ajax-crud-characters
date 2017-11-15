const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (event) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (event) => {
    let characterId = $('#fetch-one').siblings('input').val();
    $('#fetch-one').siblings('input').val('');
    charactersAPI.getOneRegister(characterId);
  });

  $('#delete-one').on('click', (event) => {
    let characterId = $('#delete-one').siblings('input').val();
    $('#delete-one').siblings('input').val('');
    charactersAPI.deleteOneRegister(characterId);
  });

  $('#edit-character-form').on('submit', (event) => {
    event.preventDefault();
    let charaterId = $('#edit-character-form div:first input').val();
    let characterName = $('#edit-character-form div:nth-child(2) input').val();
    let characterOccupation = $('#edit-character-form div:nth-child(3) input').val();
    let characterWeapon = $('#edit-character-form div:nth-child(4) input').val();
    let characterDebt = $('#edit-character-form div:nth-child(5) input').is(':checked');

    $('#edit-character-form div:first input').val('');
    $('#edit-character-form div:nth-child(2) input').val('');
    $('#edit-character-form div:nth-child(3) input').val('');
    $('#edit-character-form div:nth-child(4) input').val('');
    $('#edit-character-form div:nth-child(5) input').attr('checked', false);

    let characterInfo = {
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      debt: characterDebt
    };

    charactersAPI.updateOneRegister(charaterId, characterInfo);
  });

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault();
    let characterName = $('#new-character-form div:first input').val();
    let characterOccupation = $('#new-character-form div:nth-child(2) input').val();
    let characterWeapon = $('#new-character-form div:nth-child(3) input').val();
    let characterDebt = $('#new-character-form div:nth-child(4) input').is(':checked');

    $('#new-character-form div:first input').val('');
    $('#new-character-form div:nth-child(2) input').val('');
    $('#new-character-form div:nth-child(3) input').val('');
    $('#new-character-form div:nth-child(4) input').attr('checked', false);

    let characterInfo = {
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      debt: characterDebt
    };

    charactersAPI.createOneRegister(characterInfo);
  });
});
