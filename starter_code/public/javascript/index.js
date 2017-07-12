const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  fetchAll()

  $('#fetch-all').on('click', (e) => {
    fetchAll()
  })

  $('#fetch-one').on('click', (e) => {
    let fetchOneInput = document.getElementById( 'fetch-one-input' )
    let fetchOneValue = parseInt( fetchOneInput.value )
    fetchOne ( fetchOneValue )
  })

  $('#delete-one').on('click', (e) => {
    let deleteOneInput = document.getElementById( 'delete-one-input' )
    let deleteOneValue = parseInt( deleteOneInput.value )
    deleteOne ( deleteOneValue )
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    let data = $(e.target).serializeArray()
    modifyOne ( data )
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    let data = $(e.target).serializeArray()
    createOne ( data )
  })

})
