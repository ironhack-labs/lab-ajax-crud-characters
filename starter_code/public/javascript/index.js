/* jshint esversion:6 */
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
  charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    var fetchCharacters = $("#character-id").val();
    charactersAPI.getOneRegister(fetchCharacters);
  });

  $('#delete-one').on('click', (e) => {
    var deleteCharacters = $("#character-id-delete").val();
    charactersAPI.getOneRegister(deleteCharacters);
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
