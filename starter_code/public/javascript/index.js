const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      e.preventDefault();
      charactersAPI.getFullList();
  });


  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const idFromInput = $('#character-id').val();
    charactersAPI.getOneRegister(idFromInput);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const idFromInput = $('#character-id').val();
    charactersAPI.getOneRegister(idFromInput);
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newCharacter = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val(),
      debt: $('debt').val()
    };
    charactersAPI.createOneRegister(newCharacter);
  });
});
