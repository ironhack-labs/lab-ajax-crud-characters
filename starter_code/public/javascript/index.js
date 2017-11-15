const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();

  });


  $('#fetch-one').on('click', (response) => {
    charactersAPI.getOneRegister($('#fetchOne').val());
    console.log(response.name);

  });

  $('#delete-one').on('click', (response) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());

    console.log("borradito");
    console.log(response.name);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
   charactersAPI.updateOneRegister();
 });
  });

  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
     charactersAPI.createOneRegister();
   });
