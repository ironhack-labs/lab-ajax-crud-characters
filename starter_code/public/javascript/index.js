const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister();
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const charInfo = {
      name: $('#create-name').val(),
      occupation: $('#create-occupation').val(),
      debt: $('#create-debt').is(":checked"),
      weapon: $('#create-weapon').val(),
    };
    charactersAPI.createOneRegister(charInfo);
  });
});
