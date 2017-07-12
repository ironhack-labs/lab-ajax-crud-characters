const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList().then( characterList => {
  console.log(characterList);
});
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#searchByID').val());

  });

  $('#delete-one').on('click', (e) => {
     let characterID = $('#delete-one-character').val();
     console.log(characterID);
     charactersAPI.deleteOneRegister(characterID);
     cleanInput();
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
