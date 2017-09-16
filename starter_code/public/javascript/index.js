const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList()
      .then(p => {
        console.log(p);
      });
  })

  $('#fetch-one').on('click', (e) => {
    const myId = $('#character-id').val()
    charactersAPI.getOneRegister(myId)
      .then(p => {
        console.log(p);
      });
  })

  $('#delete-one').on('click', (e) => {
    const myId = $('#character-id-delete').val()
    charactersAPI.deleteOneRegister(myId)
      .then(p => {
        console.log(p);
      });
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    const myId = $('#edit-id').val()
    let myCharacter = {
      name: $('#edit-name').val(),
      occupation: $('#edit-occupation').val(),
      weapon: $('#edit-weapon').val(),
      debt: $('#edit-debt').val()
    }
    charactersAPI.updateOneRegister(myId, myCharacter)
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    let characterInfo = {
      name : $('#new-name').val(),
      occupation : $('#new-occupation').val(),
      weapon : $('#new-weapon').val(),
      debt : $('#new-debt').val()
    }
    charactersAPI.createOneRegister(characterInfo)
  })
})
