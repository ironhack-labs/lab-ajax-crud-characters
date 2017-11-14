const API = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    API.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    API.getOneRegister();
  })

  $('#delete-one').on('click', (e) => {
    API.deleteOneRegister();
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    API.updateOneRegister()
  })

  $('#new-character-form').on('submit', (e) => {
    API.createOneRegister();
    e.preventDefault();
  })
})
