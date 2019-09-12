const charactersAPI = new APIHandler('http://localhost:8000')
const papi = document.querySelector('.characters-container')

$(document).ready(() => {
  //Para todos los personajes
  document.getElementById('fetch-all').onclick = async function() {
    const response = await charactersAPI.getFullList()
    const allCharacters = response.data

    console.log(allCharacters)
    //Por cada personaje dentro del array de todos los personajes
    allCharacters.forEach(character => {
      const { id, name, occupation, cartoon, weapon } = character
      // Se crea la etiqueta
      const characterCard = document.createElement('div')
      characterCard.classList.add('character-info')
      // Le añado el contenido
      characterCard.innerHTML = `
      <div class="id">ID: ${id}</div>
      <div class="name">Name: ${name}</div>
      <div class="occupation">Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon? ${cartoon} </div>
      <div class="weapon">Character Weapon: ${weapon}</div>
      `
      //Se le añade a papi

      papi.appendChild(characterCard)
    })
  }

  document.getElementById('fetch-one').onclick = async function() {
    //Extraemos el valor del input
    const characterId = document.querySelector('input[name="character-id"]').value
    //Llamamos a la API
    const response = await charactersAPI.getOneRegister(characterId)
    const character = response.data
    const { id, name, occupation, cartoon, weapon } = character
    console.log(response.data)
    //1.- Crear la etiqueta
    const characterCard = document.createElement('div')
    characterCard.classList.add('character-info')
    //2.-Se añade el contenido
    characterCard.innerHTML = `
      <div class="id">ID: ${id}</div>
      <div class="name">Name: ${name}</div>
      <div class="occupation">Occupation: ${occupation}</div>
      <div class="cartoon">Is a Cartoon? ${cartoon} </div>
      <div class="weapon">Character Weapon: ${weapon}</div>
      `
    papi.appendChild(characterCard)
  }

  document.getElementById('delete-one').onclick = async function() {
    const deleteId = document.querySelector('input[name="character-id-delete"]').value
    await charactersAPI.deleteOneRegister(deleteId)
  }

  document.getElementById('edit-character-form').onsubmit = async function(e) {
    e.preventDefault()
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value
    const name = document.querySelector('#edit-character-form input[name="name"]').value
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked

    const updateCharacter = { id, name, occupation, weapon, cartoon }

    await charactersAPI.updateOneRegister(id, updateCharacter)

    // console.log(name, occupation, weapon, cartoon)
  }

  document.getElementById('new-character-form').onsubmit = async function(e) {
    e.preventDefault()
    const name = document.querySelector('.form-container input[name="name"]').value
    const occupation = document.querySelector('.form-container input[name="occupation"]').value
    const weapon = document.querySelector('.form-container input[name="weapon"]').value
    const cartoon = document.querySelector('.form-container input[name="cartoon"]').checked
    console.log(name, occupation, weapon, cartoon)

    //Creamos el objeto con los nuevos valores que le daremos a post
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    }
    // Hacemos la petición
    await charactersAPI.createOneRegister(newCharacter)
  }
})
