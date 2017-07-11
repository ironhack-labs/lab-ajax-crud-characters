
function createDiv (){
  return document.createElement('DIV')
}

function fillElementWith ( element, text ){
  let textNode = document.createTextNode ( text )
  element.appendChild( textNode )
}

function createCharacterInfo (){
  let characterInfo = createDiv()
  characterInfo.classList.add ('character-info')
  return characterInfo
}

function createTextComponent( className, contentText ){
  let element = createDiv ()
  element.classList.add ( className )
  fillElementWith( element, contentText )
  return element
}

function createName ( nameText ){
  return createTextComponent( 'name', nameText )
}

function createOccupation ( occupationText ){
  return createTextComponent( 'occupation', occupationText )
}

function createDebt ( debt ){
  return createTextComponent( 'weapon', debt ? 'has debt' : 'has no debt' )
}

function createWeapon ( weapon ){
  return createTextComponent( 'weapon', weapon )
}

function createCard ( character){
  let characterInfo = createCharacterInfo ()

  characterInfo.appendChild ( createName ( character.name) )
  characterInfo.appendChild ( createOccupation ( character.occupation) )
  characterInfo.appendChild ( createDebt ( character.debt) )
  characterInfo.appendChild ( createWeapon ( character.weapon ) )

  return characterInfo
}

function emptyCardsContainer (){
  const charactersContainer = document.querySelector ('.characters-container')
  let card
  while( (card = charactersContainer.firstElementChild ) ){
    charactersContainer.removeChild (card)
  }
}

function appendCardToContainer ( card ){
  const charactersContainer = document.querySelector ('.characters-container')
  charactersContainer.appendChild ( card )
}

function addCharacterToCards ( character ){
  let card = createCard ( character )
  appendCardToContainer ( card )
}

function addCharactersToCards ( charactersArray ) {
  emptyCardsContainer()
  charactersArray.forEach ( (char) => addCharacterToCards ( char ))
}

function showCharacter ( character ){
  emptyCardsContainer()
  addCharacterToCards( character )
}
