const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  console.log("Connection Successful");


  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getOneRegister($('#get-by-id-input').val());

  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.deleteOneRegister($('#delete-by-id-input').val());
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const id = $('#update-by-id-input').val();

    const updateInfo = {
      name: $('#update-name-input').val(),
      occupation: $('#update-occupation-input').val(),
      weapon: $('#update-weapon-input').val(),
      debt: $('#update-debt-input').is(':checked')
    };

    charactersAPI.updateOneRegister(id, updateInfo);

  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const charInfo = {
      name: $('#create-name-input').val(),
      occupation: $('#create-occupation-input').val(),
      weapon: $('#create-weapon-input').val(),
      debt: $('#create-debt-input').is(':checked')
    };

    charactersAPI.createOneRegister(charInfo);
  });
});
