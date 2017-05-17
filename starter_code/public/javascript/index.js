/*jshint esversion:6*/



const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  let listOfCharacters = charactersAPI.getFullList();

  $('#fetch-all').on('click', (e) => {
    if(listOfCharacters.length !== 0){
      $('.characters-container').remove();
        charactersAPI.getFullList().map(item =>{
        $('.container').append('<div>Character Name</div>').addClass('name').append(item.name);
        $('.container').append('<div>Character Occupation</div>').addClass('occupation').append(item.occupation);
        $('.container').append('<div>Character Debt</div>').addClass('debt').append(item.debt);
        $('.container').append('<div>Character Weapon</div>').addClass('weapon').append(item.weapon);
      });
    }
  });

  $('#fetch-one').on('click', (e) => {

  })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })
})
