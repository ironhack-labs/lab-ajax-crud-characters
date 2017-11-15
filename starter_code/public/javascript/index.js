const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {

  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    let findById = $('#character-id').val();
    charactersAPI.getOneRegister(findById)
  })

  $('#delete-one').on('click', (e) => {
    let findById = $('#character-id-delete').val()
    charactersAPI.deleteOneRegister(findById);
  })

  $('#edit-character-form').on('submit', (e) => {
    let findById = $('')
    charactersAPI.updateOneRegister(findById);
  })


  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    charactersAPI.createOneRegister();
  })

})
