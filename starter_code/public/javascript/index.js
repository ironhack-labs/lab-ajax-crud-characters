const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList ();
  })

  $('#fetch-one').on('click', (e) => {
charactersAPI.getOneRegister ($("#fetchOne").val());
  })

  $('#delete-one').on('click', (e) => {
charactersAPI.deleteOneRegister ();
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })
})
