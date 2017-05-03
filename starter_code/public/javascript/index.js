const charactersAPI = new APIHandler("http://ih-api.herokuapp.com/characters/")


$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    var characterId = $("input[name='character-id']").val();
    charactersAPI.getOneRegister(characterId);
  })

  $('#delete-one').on('click', (e) => {
    // var deleteOne = $("input[name='character-id-delete']").val();
    // charactersAPI.getOneRegister(deleteOne);
  })

  $('#edit-character-form').on('submit', (e) => {

  })



  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    charactersAPI.createOneRegister();
  })
})
