const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    const charId = $('#character-id').val();
    charactersAPI.getOneRegister(charId);
  })

  $('#delete-one').on('click', (e) => {
    const charId = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(charId)
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const updateInfo = {
      name: $('#update-name').val(),
      occupation: $('#update-occupation').val(),
      weapon: $('#update-weapon').val(),
      debt: $('#update-debt').val()
    };
    const characterId = $('#chr-id').val();
    charactersAPI.updateOneRegister (updateInfo, characterId);
  })

$('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newInfo = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val(),
      debt: $('#debt').val()
    };
    charactersAPI.createOneRegister(newInfo);
});
});
