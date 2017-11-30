const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    console.log("Fetch all Clicked!");
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {

    var number = $("#character-id").val();
    charactersAPI.getOneRegister(number);

  });

  $('#delete-one').on('click', (e) => {
    var number = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(number);
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
