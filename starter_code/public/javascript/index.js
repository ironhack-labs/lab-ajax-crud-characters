const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

function createDivCharacter(character) { 
  console.log("hola")
  return `
    <div class="character-info" id="${character.id}">
      <div class="name">${character.name}</div>
      <div class="occupation">${character.occupation}</div>
      <div class="debt">${character.debt}</div>
      <div class="weapon">${character.weapon}</div>
    </div>
   `
}

function getEachCharacter(characters) {
  characters.forEach(character => {
    $(".characters-container").append(createDivCharacter(character))
  })
}

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList()
      .then( characters => getEachCharacter(characters))
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister(id)
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister(id)
  })

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister(id)
  })

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister()
  })
})
