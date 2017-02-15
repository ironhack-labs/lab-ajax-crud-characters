const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();

  })

  $('#fetch-one').on('click', (e) => {
    var character = $('#character-id').val();
    charactersAPI.getOneRegister (character);


  })

  $('#delete-one').on('click', (e) => {
    var character = $('#delete-one').val();
    charactersAPI.deleteOneRegister (character);
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const characterInfo= {};
    characterInfo.name = $('#new-name').val();
    characterInfo.occupation = $('#new-occupation').val();
    characterInfo.weapon = $('#new-weapon').val();
    characterInfo.debt = $('#new-debt').prop('checked');
    console.log(characterInfo);
    charactersAPI.createOneRegister(characterInfo);

  })
})
