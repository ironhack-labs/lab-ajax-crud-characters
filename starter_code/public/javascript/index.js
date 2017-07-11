const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")
let currentlyShow = []

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then( data => {
      console.log ( data )
      addCharactersToCards ( data )
      currentlyShow = data.map(i=>i.id)
    })
  })

  $('#fetch-one').on('click', (e) => {
    let fetchOneInput = document.getElementById( 'fetch-one-input' )
    let fetchOneValue = parseInt( fetchOneInput.value )
    charactersAPI.getOneRegister( fetchOneValue ).then( data => {
      console.log ( data )
      showCharacter ( data )
      fetchOneInput.value = ''
      currentlyShow = [ data.id ]
    })
  })

  $('#delete-one').on('click', (e) => {
    let deleteOneInput = document.getElementById( 'delete-one-input' )
    let deleteOneValue = parseInt( deleteOneInput.value )
    charactersAPI.deleteOneInputOneRegister( deleteOneValue ).then( data => {
      deleteOneInput.value = ''

      let cardIndex = currentlyShow.indexOf( data.id )
      if( cardIndex != -1 ){
        const charactersContainer = document.querySelector ('.characters-container')

        let childrenToDelete = charactersContainer.children[ cardIndex ];
        charactersContainer.removeChild( childrenToDelete )
        currentlyShow = currentlyShow.filter( (e)=> !(e === cardIndex ))
      }
    })
  })

  $('#edit-character-form').on('submit', (e) => {

  })

  $('#new-character-form').on('submit', (e) => {

  })

})
