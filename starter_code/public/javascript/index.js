const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characters => console.log(characters))
  })

  $('#fetch-one').on('click', (e) => {
    const characterId = $("input[name='character-id']").val()
    charactersAPI.getOneRegister(characterId).then(character => console.log(character))
  })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    let character = {
      name: $('.name')
    }
  })
})
