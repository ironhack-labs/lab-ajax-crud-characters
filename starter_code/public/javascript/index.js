const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    fetchAll()
  })

  $('#fetch-one').on('click', (e) => {
    $('.characters-container').empty()
    const characterId = $("input[name='character-id']").val()
    charactersAPI.getOneRegister(characterId)
      .then(character => $('section.operations').prepend(displayCharacter(character)))
      .catch(err => console.log(err))
  })

  $('#delete-one').on('click', (e) => {
    const characterId = $("input[name='character-id-delete']").val();
    charactersAPI.deleteOneRegister(characterId)
      .then(() => {fetchAll(); console.log('¡Character deleted!')})
      .catch(err => console.log(err))
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    const $parent = $("#new-character-form").children("div")
    const character = {
      name:       $parent.children("input[name='name']").val(),
      occupation: $parent.children("input[name='occupation']").val(),
      weapon:     $parent.children("input[name='weapon']").val(),
      debt:       $parent.children("input[name='debt']").is(':checked')
    }
    charactersAPI.createOneRegister(character)
      .then(() => console.log('¡Character created!'))
      .catch(err => console.log(err))
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    const $parent = $("#edit-character-form").children("div")
    const character = {
      id :        $parent.children("input[name='chr-id']").val(),
      name:       $parent.children("input[name='name']").val(),
      occupation: $parent.children("input[name='occupation']").val(),
      weapon:     $parent.children("input[name='weapon']").val(),
      debt:       $parent.children("input[name='debt']").is(':checked')
    }
    charactersAPI.updateOneRegister(character)
      .then(() => console.log('¡Character edited!'))
      .catch(err => console.log(err))
  })
})

function fetchAll(){
  $('.characters-container').empty()
  charactersAPI.getFullList()
    .then(characters => characters.forEach(
      c => $('section.operations').prepend(displayCharacter(c))))
}

function displayCharacter(c){
  const $characterContainer  = $('<div>').addClass('characters-container')
  const $characterInfo       = $('<div>').addClass('character-info')
  const $characterId         = $('<div>').addClass('id').text(`Id: ${c.id}`)
  const $characterName       = $('<div>').addClass('name').text(`Name: ${c.name}`)
  const $characterOccupation = $('<div>').addClass('occupation').text(`Occupation: ${c.occupation}`)
  const $characterDebt       = $('<div>').addClass('debt').text(`Debt: ${c.debt}`)
  const $characterWeapon     = $('<div>').addClass('weapon').text(`Weapon: ${c.weapon}`)

  $characterInfo.append($characterId)
  $characterInfo.append($characterName)
  $characterInfo.append($characterOccupation)
  $characterInfo.append($characterDebt)
  $characterInfo.append($characterWeapon)

  return $characterContainer.append($characterInfo)
}
