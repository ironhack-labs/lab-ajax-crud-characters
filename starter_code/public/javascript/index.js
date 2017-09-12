const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(p => {
      console.log(p)
    })
  })

  $('#fetch-one').on('click', (e) => {
    const characterId = $('#character-id').val()
    charactersAPI.getOneRegister(characterId).then( p => {
      console.log(p)
    })
  })

  $('#delete-one').on('click', (e) => {
    const characterId = $('character-id-delete').val()
    charactersAPI.deleteOneRegister(characterId).then( p => {
       console.log(p) })
  })

  $('#new-character-form').on('submit', (e) => {
    const name = $('input[name=name]').val();
    const occupation = $('input[name=occupation]').val();
    const weapon = $('input[name=weapon]').val();
    const debt = $('checkbox[name=debt]').val();
    //charactersAPI.createOneRegister().then(p => { console.log(p) })
  })

  $('#edit-character-form').on('submit', (e) => {

  })


})
