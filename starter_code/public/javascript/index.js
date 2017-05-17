const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const id            = $('#character-id').val();
    console.log(`IndexJS id: ${id}`);
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const id            = $('#deleteId').val();
    console.log(id);
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const id            = $('#updateId').val();
    const info          = {
      name:               $('#updateName').val(),
      occupation:         $('#updateOccupation').val(),
      weapon:             $('#updateWeapon').val()
    };
    charactersAPI.updateOneRegister(id, info);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const info = {
      name:             $('#createName').val(),
      occupation:       $('#createOccupation').val(),
      weapon:           $('#createWeapon').val()
    };
    charactersAPI.createOneRegister(info);
  });
});
