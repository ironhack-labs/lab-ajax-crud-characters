const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then( p => { console.log(p) })
  })

  $('#fetch-one').on('click', (e) => {
    let characterId = $('#input-fetch-one').val()
    charactersAPI.getOneRegister ( characterId ).then( p => { console.log(p) })
  })

  $('#delete-one').on('click', (e) => {
    let characterId = $('#js-delete-one').val()
    charactersAPI.deleteOneRegister (characterId).then( p => { console.log(p) })
  })

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault()
    let updateId = $('#js-update-id').val()
    let updateCharacter = {
      name: $('#js-update-name').val(),
      occupation: $('#js-update-occupation').val(),
      weapon: $('#js-update-weapon').val(),
      debt: $('#js-update-debt').val()
    }
    charactersAPI.updateOneRegister ( updateCharacter, updateId ).then( p => { console.log(p) })

  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    let newCharacter = {
      name: $('#js-new-name').val(),
      occupation: $('#js-new-occupation').val(),
      weapon: $('#js-new-weapon').val(),
      debt: $('#js-new-debt').val()
    }
    charactersAPI.createOneRegister( newCharacter )
  })
})
