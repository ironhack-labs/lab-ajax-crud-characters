const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
charactersAPI.getOneRegister($('#searchByID').val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());
  });
  $('#new-character-form').on('submit', (e) => {
var
name = $('name').val(),
occupation = $('occupation').val(),
debt = $('debt').val(),
weapon = $('weapon').val();

charactersAPI.createOneRegister(name,occupation,debt,weapon);
  });

  $('#edit-character-form').on('submit', (e) => {
charactersAPI.updateOneRegister();
  });

});
