const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList()
    .then(p => {console.log(p);
    })
  })

  $('#fetch-one').on('click', (e) => {
    const id = $('section.operations input[name="character-id"]').val()
    charactersAPI.getOneRegister(id)
    .then(p => {console.log(p)
    })
 })

  $('#delete-one').on('click', (e) => {

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    const character = {
      name: $('section.form-container input[type = "name"]').val(),
      occupation: $('section.form-container input[name = "occupation"]').val(),
      weapon: $('section.form-container input[name = "weapon"]').val(),
      debt: $('section.form-container input[name = "checkbox"]').is(':checked')
    }
    charactersAPI.createOneRegister(character)
    .then(p => {console.log(p)})
  })
})
