const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    const characterID = $('#character-id').val();
    charactersAPI.getOneRegister(characterID);
  });


  $('#delete-one').on('click', (e) => {
    const deletedID = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(deletedID);
  });


  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

        const updatedCharacterInfo = {
          name: $('#updatename').val(),
          occupation: $('#updateoccupation').val(),
          weapon: $('#updateweapon').val(),
          debt: $('#updatedebt').is(':checked')
        };

        const characterID = $('#updateChr-Id').val();

        charactersAPI.updateOneRegister(characterID, updatedCharacterInfo);
  });


  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const newCharacterInfo = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val()
    };

    charactersAPI.createOneRegister(newCharacterInfo);
  });


});
