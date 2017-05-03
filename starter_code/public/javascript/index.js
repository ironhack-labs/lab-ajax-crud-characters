/*jshint esversion: 6*/
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");
$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister();
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister();
  });
});

function generateInfo(){
  $('.characters-container').append($('<div>').addClass('character-info').append($('<div>').addClass('name').html("Character Name")).append($('<div>').addClass('occupation').html("Character Occupation")).append($('<div>').addClass('debt').html("Character Debt")).append($('<div>').addClass('weapon').html("Character Weapon")));
}
