const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const id = $('#character-id').val();
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const id = $('#character-id-delete').val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const newChar = {
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      weapon: $('#edit-weapon').val(),
      debt: $('#edit-debt').val()
    };
    console.log(newChar);
    const editId = $('#edit-id').val();
    console.log(editId);


    $.ajax(
      {
        url: 'https://ih-api.herokuapp.com/characters/' + editId,
        method: 'PATCH',
        data: newChar,
        success: (data) => {
          console.log('UPDATED -------> ');
          console.log(data);
          $('#edit-data').css('background-color','green');
        },

        error: (err) => {
          console.log('ERR');
          console.log(err);
          $('#edit-data').css('background-color','red');
        }
      }
    );
  });


  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const newChar = {
      name: $('#new-name').val(),
      occupation: $('#new-occupation').val(),
      weapon: $('#new-weapon').val(),
      debt: $('#new-debt').val(),
    };
    console.log(newChar);
    charactersAPI.createOneRegister(newChar);
});

});
