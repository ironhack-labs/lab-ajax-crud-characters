const charactersAPI = new APIHandler("http://ih-api.herokuapp.com/characters/")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    let charID = $('input[name ="character-id"]').val();
    charactersAPI.getOneRegister(charID);
  })

  $('#delete-one').on('click', (e) => {
    let charID = $('input[name="character-id-delete"]').val();s
    charactersAPI.deleteOneRegister(charID);
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    
    charactersAPI.createOneRegister();
  })
})
