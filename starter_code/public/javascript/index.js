const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    getOneRegister();
  });

  $('#delete-one').on('click', (e) => {
    deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    createOneRegister();
  });
});
