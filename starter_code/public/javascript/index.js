/* jshint esversion:6 */

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
   charactersAPI.getFullList();

  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister();

  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
