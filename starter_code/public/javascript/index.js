const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister()
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.createOneRegister()
  })

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister()
  })

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.deleteOneRegister()
  })
})
