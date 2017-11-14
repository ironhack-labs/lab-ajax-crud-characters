const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  })

  $('#fetch-one').on('click', (e) => {

    const charID = document.getElementById('id').value;
    charactersAPI.getOneRegister(charID);
  })

  $('#delete-one').on('click', (e) => {
    const charID = document.getElementById('id-del').value;
    charactersAPI.deleteOneRegister(charID);

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

    const form = document.getElementById('new-character-form');
    const newCharacter = {
      name: form[0].value,
      occupation: form[1].value,
      weapon: form[2].value,
      debt: form[3].checked
    }
    
    charactersAPI.createOneRegister(newCharacter)
  })
})
