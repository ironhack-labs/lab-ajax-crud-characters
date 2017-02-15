const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister();
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();

  })

  $('#edit-character-form').on('submit', (e) => {
      event.preventDefault();
      charactersAPI.updateOneRegister();

  })

  $('#new-character-form').on('submit', (e) => {
      event.preventDefault();
    charactersAPI.createOneRegister();

  })
})
