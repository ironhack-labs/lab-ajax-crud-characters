const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => {
      console.log(p)
    })
  })

  $('#fetch-one').on('click', (e) => {
    const characterId = $('#character-id').val()
    charactersAPI.getOneRegister(characterId).then(p => {
      console.log(p)
    })
  })

  $('#delete-one').on('click', (e) => {
    const characterId = $('character-id-delete').val()
    charactersAPI.deleteOneRegister(characterId).then(p => {
      console.log(p)
    })
  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    let name = $('#new-name').val()
    let occupation = $('#new-occupation').val()
    let weapon = $('#new-weapon').val()
    let debt = $('#new-debt').val()
    newCharacter.name = name;
    newCharacter.occupation = occupation;
    newCharacter.weapon = weapon;
    newCharacter.debt = debt;
    charactersAPI.createOneRegister(newCharacter).then(p => {
      console.log(p)
    })
  })

  $('#edit-character-form').on('submit', (e) => {

  })


})//endReady
