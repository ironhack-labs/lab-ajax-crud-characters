
// Get all the characters info from http://ih-crud-api.herokuapp.com/characters
// Get a single character info from http://ih-crud-api.herokuapp.com/characters/:id
// Create a single character posting the data to http://ih-crud-api.herokuapp.com/characters
// Delete a single character through his id in http://ih-crud-api.herokuapp.com/characters/:id
// Edit a single character through his id in http://ih-crud-api.herokuapp.com/characters/:id

const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com/characters");

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
    charactersAPI.updateOneRegister();
  })

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister();
  })
})
