const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")


function removeDivCharacter() {
  $(".characters-container").empty()
}

function createDivCharacter(character) { 
  return $(".characters-container").append(`
  <div class="character-info" id="${character.id}">
  <div class="name">${character.name}</div>
  <div class="occupation">${character.occupation}</div>
  <div class="debt">${character.debt}</div>
  <div class="weapon">${character.weapon}</div>
  </div>
  `)
}


function getEachCharacter(characters) {
  characters.forEach(character => {
    createDivCharacter(character)
  })
}

function updateCharacters() {
  removeDivCharacter()
  charactersAPI.getFullList()
    .then(characters => getEachCharacter(characters))
}

function catchData() {
  return {
    name: $("#new-character-form input[name='name']").val(),
    occupation: $("#new-character-form input[name='occupation']").val(),
    weapon: $("#new-character-form input[name='weapon']").val(),
    debt: $("#new-character-form input[type='checkbox']").is(":checked")
  }
}

function catchUpdates() {
  return {
    id: $("#edit-character-form input[name='chr-id']").val(),
    name: $("#edit-character-form input[name='name']").val(),
    occupation: $("#edit-character-form input[name='occupation']").val(),
    weapon: $("#edit-character-form input[name='weapon']").val(),
    debt: $("#edit-character-form input[type='checkbox']").is(":checked")
  }
}

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    updateCharacters()
  })

  $('#fetch-one').on('click', (e) => {
    const charId = $("section.operations input[name='character-id'").val()
    charactersAPI.getOneRegister(charId)
      .then(char => {
        removeDivCharacter()
        createDivCharacter(char)
      })
  })

  $('#delete-one').on('click', (e) => {
    const charId = $("input[name='character-id-delete']").val()
    charactersAPI.deleteOneRegister(charId)
      .then(updateCharacters())
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault()
    const updates = catchUpdates()
    const charId = updates.id
    charactersAPI.updateOneRegister(charId, updates)
      .then(updateCharacters())
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault()
    const data = catchData()
    charactersAPI.createOneRegister(data)
      .then(updateCharacters())
  })
})
