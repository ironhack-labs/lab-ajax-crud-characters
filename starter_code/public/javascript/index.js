const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();

  });


   $('#fetch-one').on('click', (response) => {
  charactersAPI.getOneRegister($('#fetchOne').val());
    console.log(response.name);
    // $('.name').text(response.name);
    // $('.occupation').text(response.occupation);
    // $('.debt').text(response.debt);
    // $('.weapon').text(response.weapon);

});

  $('#delete-one').on('click', (response) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());

      console.log("borradito");
      console.log(response.name);
  });



  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister

  });
});
