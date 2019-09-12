const charactersAPI = new APIHandler('http://localhost:8000/characters')

$(document).ready(() => {
  // Create all character cards in the DOM
  document.getElementById('fetch-all').onclick = async function() {
    // API Call
    const response = await charactersAPI.getFullList()
    const allCharacters = response.data
    // Iterating over the array
    allCharacters.forEach(character => {
      // Creating the div container
      const charCard = document.createElement('div')
      charCard.classList.add('character-info')
      // Adding the dynamic info from the API
      charCard.innerHTML = `
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      `
      // Appending the child to the parent
      document.querySelector('.characters-container').appendChild(charCard)
    })
  }

  // Create a single character card
  document.getElementById('fetch-one').onclick = async function() {
    const id = document.querySelector('#character-id').value
    const response = await charactersAPI.getOneRegister(id)
    const character = response.data
    // Creating the div container
    const charCard = document.createElement('div')
    charCard.classList.add('character-info')
    // Adding the dynamic info from the API
    charCard.innerHTML = `
        <div class="id">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      `
    // Appending the child to the parent
    document.querySelector('.characters-container').appendChild(charCard)
  }

  // Borra un personaje de acuerdo a su id
  document.getElementById('delete-one').onclick = async function(e) {
    e.preventDefault()
    const id = document.querySelector('#character-id-delete').value
    // Si todo salió bien...
    try {
      await charactersAPI.deleteOneRegister(id)
      document.querySelector('#delete-one').classList.add('success')
      // Si algo salió mal...
    } catch (error) {
      console.log(error)
      document.querySelector('#delete-one').classList.add('error')
    }
  }

  // Editar el personaje
  document.getElementById('edit-character-form').onsubmit = async function(e) {
    // "Prevents the refresh"
    e.preventDefault()
    // Stores all data from the form
    const id = document.querySelector('#edit-id').value
    const name = document.querySelector('#edit-name').value
    const occupation = document.querySelector('#edit-occupation').value
    const weapon = document.querySelector('#edit-weapon').value
    const cartoon = document.querySelector('#edit-cartoon').checked
    // Updates the char object
    const updatedCharacter = { id, name, occupation, weapon, cartoon }
    // Handles the request
    await charactersAPI.updateOneRegister(id, updatedCharacter)
  }

  // Crear el personaje
  document.getElementById('new-character-form').onsubmit = async function(e) {
    // "Prevents the refresh"
    e.preventDefault()
    // Stores all data from the form
    const name = document.querySelector('#new-name').value
    const occupation = document.querySelector('#new-occupation').value
    const weapon = document.querySelector('#new-weapon').value
    const cartoon = document.querySelector('#new-cartoon').checked
    // Creates the newChar object
    const newCharacter = { name, occupation, weapon, cartoon }
    // Handles the request
    await charactersAPI.createOneRegister(newCharacter, e)
  }
})
