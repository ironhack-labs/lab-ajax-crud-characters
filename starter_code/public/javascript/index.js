const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    $("#display").empty();
    return charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    $("#display").empty();
    return charactersAPI.getOneRegister();
  })

  $('#delete-one').on('click', (e) => {
    $("#display").empty();
    return charactersAPI.deleteOneRegister();
  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    return charactersAPI.updateOneRegister();
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    return charactersAPI.createOneRegister();
  })
})
