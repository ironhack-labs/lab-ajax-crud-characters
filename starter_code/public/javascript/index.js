

const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#fetch-one-input').val());
  })

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    charactersAPI.deleteOneRegister();
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    charactersAPI.updateOneRegister();
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    charactersAPI.createOneRegister();
  })
})
