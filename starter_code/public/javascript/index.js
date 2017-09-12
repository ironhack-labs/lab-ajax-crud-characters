const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
     charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const charactersId = $("#characterId").val();
    charactersAPI.getOneRegister(charactersId);
  })

  $('#delete-one').on('click', (e) => {
     const deleteId = $("character-delete-id").val();
     charactersAPI.deleteOneRegister(deleteId);
  })

  $('#edit-character-form').on('submit', (e) => {
    
  })

  $('#new-character-form').on('submit', (e) => {

  })
})
