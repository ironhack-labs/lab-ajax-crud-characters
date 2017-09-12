const apiHandler = new APIHandler();

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    apiHandler.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    apiHandler.getOneRegister();
  });

  $('#delete-one').on('click', (e) => {
    apiHandler.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    apiHandler.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
      event.preventDefault();
      apiHandler.createOneRegister();
  });
});
