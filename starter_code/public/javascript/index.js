const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => {console.log(p)})
  })

  $('#fetch-one').on('click', (e) => {
    let posi = $('.selectID').val()
    charactersAPI.getOneRegister(posi).then(p => {console.log(p)})
  })

  $('#delete-one').on('click', (e) => {
    let deletPosi = $('input:text[name = character-id-delete]').val()
      charactersAPI.deleteOneRegister(deletPosi)

  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault()
    let nuevo ={
    name: $('input:text[name = name]').val(),
    occupation: $('input:text[name = occupation]').val(),
    weapon: $('input:text[name = weapon]').val()
  }
    charactersAPI.createOneRegister(nuevo)
  })
})
