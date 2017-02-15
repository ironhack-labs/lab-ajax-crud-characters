const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
    printTheFullList = function(response){
      console.log(response)
    };
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val())
    bringTheCharacter = function(response){
      console.log(response.name);
      $('.name').text(response.name);
      $('.occupation').text(response.occupation);
      $('.debt').text(response.debt);
      $('.weapon').text(response.weapon);
    };
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
   charactersAPI.createOneRegister();
 });
});
