const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const selectedId = $('[name=character-id]').val();
    charactersAPI.getOneRegister(selectedId);
  });

  $('#delete-one').on('click', (e) => {
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newName = $('#new-character-form').find('[name=name]').val();
    const newOccupation = $('#new-character-form').find('[name=occupation]').val();
    const newWeapon = $('#new-character-form').find('[name=weapon]').val();
    const hasDebt = $('#new-character-form').find('[name=debt]').prop('checked');

    const characterInfo = {
      name : newName,
      occupation : newOccupation,
      debt : hasDebt,
      weapon : newWeapon
    };

    charactersAPI.createOneRegister(characterInfo);
    // console.log(characterInfo);
  });
});
