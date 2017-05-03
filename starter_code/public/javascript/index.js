/*jshint esversion: 6*/
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");
$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.getOneRegister();
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    charactersAPI.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    console.log("hi create");
    charactersAPI.createOneRegister();
  });
});
