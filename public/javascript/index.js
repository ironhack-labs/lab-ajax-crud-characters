const charactersAPI = new APIHandler( 'http://localhost:8000' );

window.addEventListener( 'load', () => {
  const charactersContainer = document.querySelector( '.characters-container' )
  const clear = () => charactersContainer.innerHTML = ''
  


  let eventChecker = false
  const update = () => {
    charactersAPI.getFullList()
      .then( characters => {
        characters.forEach( character => {
          const {
            id,
            name,
            occupation,
            weapon,
            cartoon
          } = character
          renderComponent( id, name, occupation, weapon, cartoon )
        } )
      } )
      .catch( error => {
        charactersContainer.innerHTML = '<h1>No characters to display</h1>'
        console.log( error )
      } )
  }

  const createComponent = ( id, name, occupation, cartoon, weapon ) => (
    `<div class="id">id: <span>${id}</span></div>
    <div class="name">Name: <span>${name}</span></div>
    <div class="occupation">Occupation: <span>${occupation}</span></div>
    <div class="cartoon">Cartoon: <span>${cartoon}</span></div>
    <div class="weapon">Weapon: <span>${weapon}</span></div>`
  )

  const renderComponent = ( id, name, occupation, weapon, cartoon ) => {
    const div = document.createElement( 'div' )
    div.classList.add( 'character-info' )
    div.innerHTML = createComponent( id, name, occupation, weapon, cartoon )
    charactersContainer.appendChild( div )
  }

  document.getElementById( 'fetch-all' ).addEventListener( 'click', function ( event ) {
    clear()
    eventChecker = true
    update()

  } );

  document.getElementById( 'fetch-one' ).addEventListener( 'click', function ( event ) {
    clear()
    
    const inputSearchId = document.getElementById( 'character-id' )
    charactersAPI.getOneRegister( inputSearchId.value )
      .then( character => {
        const {
          id,
          name,
          occupation,
          weapon,
          cartoon
        } = character
        renderComponent( id, name, occupation, weapon, cartoon )
      } )
      .catch( error => {
        charactersContainer.innerHTML = '<h1>No characters to display</h1>'
        console.log( error )
      } )
  } );


  document.getElementById( 'delete-one' ).addEventListener( 'click', function ( event ) {
    clear()
    const inputDeleteId = document.getElementById( 'character-id-delete' )
    if ( eventChecker )
      charactersAPI.deleteOneRegister( inputDeleteId.value )
    charactersContainer.innerHTML = '<h1>Character deleted</h1>'

  } );

  document.getElementById( 'edit-character-form' ).addEventListener( 'submit', function ( event ) {

    const editId = document.querySelector( '#edit-id' ).value
    const editName = document.querySelector( '#edit-name' ).value
    const editOccupation = document.querySelector( '#edit-occupation' ).value
    const editWeapon = document.querySelector( '#edit-weapon' ).value
    const editCartoon = document.querySelector( '#edit-cartoon' ).value

    charactersAPI.updateOneRegister( editId, editName, editOccupation, editWeapon, editCartoon )
      .then( character => {
        const {
          id,
          name,
          occupation,
          weapon,
          cartoon
        } = character
        renderComponent( id, name, occupation, weapon, cartoon )
        charactersContainer.innerHTML = '<h1>Character edited</h1>'
      } )
      .catch( () => charactersContainer.innerHTML = '<h1>Character not created</h1>' )
  } );
} );

document.getElementById( 'new-character-form' ).addEventListener( 'submit', function ( event ) {
  clear()
  const newName = document.querySelector( '#new-name' ).value
  const newOccupation = document.querySelector( '#new-occupation' ).value
  const newWeapon = document.querySelector( '#new-weapon' ).value
  const newCartoon = document.querySelector( '#new-cartoon' ).value

  if ( ( !newName || !newOccupation || !newWeapon || !newCartoon ) ) return

  charactersAPI
    .createOneRegister( newName, newOccupation, newWeapon, newCartoon )
    .then( character => {
      const {
        id,
        name,
        occupation,
        weapon,
        cartoon
      } = character
      renderComponent( id, name, occupation, weapon, cartoon )
      charactersContainer.innerHTML = '<h1>Character created</h1>'
    } )
    .catch( () => charactersContainer.innerHTML = '<h1>Character not created</h1>' )
} );