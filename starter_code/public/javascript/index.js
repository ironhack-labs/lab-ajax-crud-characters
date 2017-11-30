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

  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    console.log("CLICKER!");

    const userName = $('#name').val();
    const userWeapon = $('#weapon').val();
    const userJob = $('#occupation').val();


    charactersAPI.createOneRegister(userName, userWeapon, userJob);
  });
});
