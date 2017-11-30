const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
});

  $('#fetch-one').on('click', (e) => {
    event.preventDefault();
    const id = $('#character-id').val();
    // const char = charactersAPI.getOneRegister(id);
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

    event.preventDefault();

    const updateName =       $('#name').val();
    const updateWeapon =     $('#weapon').val();
    const updateOccupation = $('#occupation').val();
    const charId =           $('#chr-id').val();
    console.log(charId);
    charactersAPI.updateOneRegister( charId, updateName, updateWeapon, updateOccupation);
  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    console.log("CLICKER!");

    const userName =   $('#name').val();
    const userWeapon = $('#weapon').val();
    const userJob =    $('#occupation').val();

    charactersAPI.createOneRegister(userName, userWeapon, userJob);
  });
});
