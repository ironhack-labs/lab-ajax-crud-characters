const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")
const divTag = $('<div>')
const characterId = $("input[name='character-id-delete']").val()


$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    fetchAllData()
  })

  $('#fetch-one').on('click', (e) => {
    $('.characters-container').empty()
    charactersAPI.getOneRegister(characterId)
      .then((character) => $('section.operations').prepend(displayCharacter(character)))
      .catch((err) => console.log(err))
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister(characterId)
      .then(() => {
        fetchAll()
        console.log('¡Character was deleted!')
      })
      .catch((err) => console.log(err))
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    const character = getCharacterValues()
    charactersAPI.createOneRegister(character)
      .then(() => {
        fetchAll()
        console.log('¡Character was created!')
      })
      .catch(err => console.log(err))
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    const character = getCharacterValues()
    charactersAPI.updateOneRegister(character)
      .then(() => console.log('¡Character was edited!'))
      .catch(err => console.log(err))
  })
})

function getCharacterValues() {
  return {
    id :        $("#edit-character-form input[name='chr-id']").val(),
    name:       $("#edit-character-form input[name='name']").val(),
    occupation: $("#edit-character-form input[name='occupation']").val(),
    weapon:     $("#edit-character-form input[name='weapon']").val(),
    debt:       $("#edit-character-form input[name='debt']").is(':checked')
  }
}

function fetchAllData(){
  $('.characters-container').empty()
  charactersAPI.getFullList()
    .then(characters => characters.forEach(
      character => $('section.operations').prepend(displayCharacter(character))
    ))
}

function displayCharacter(char){
  const $characterContainer  = divTag.addClass('characters-container')
  const $characterInfo       = divTag.addClass('character-info')
  const $characterId         = divTag.addClass('id').text(`Id: ${char.id}`)
  const $characterName       = divTag.addClass('name').text(`Name: ${char.name}`)
  const $characterOccupation = divTag.addClass('occupation').text(`Occupation: ${char.occupation}`)
  const $characterDebt       = divTag.addClass('debt').text(`Debt: ${char.debt}`)
  const $characterWeapon     = divTag.addClass('weapon').text(`Weapon: ${char.weapon}`)

  $characterInfo.append($characterId)
  $characterInfo.append($characterName)
  $characterInfo.append($characterOccupation)
  $characterInfo.append($characterDebt)
  $characterInfo.append($characterWeapon)

  return $characterContainer.append($characterInfo)
}