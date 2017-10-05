const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList()
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister()
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister()
  })

  $('#launch-shitstorm').on('click', (e) => {
    charactersAPI.surpise()
  })

  $('#helloYou').on('click', (e) => {
    e.preventDefault()
    charactersAPI.havoc = true
    charactersAPI.populate()
    $(this).text('Oooops something went wrong...')
  })

  $('#ohShit').on('click', (e) => {
    $('.mad').toggleClass("woop")
    charactersAPI.havoc = true
  })
  $('#boom').on('click', (e) => {
    e.preventDefault()
    charactersAPI.havoc = true
    charactersAPI.populate(parseInt($('#rage').val()))
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })
})

function log(arg) {
  console.log('LOG FUNCTION RESUTLT =')
  console.log(arg)
  return arg
}