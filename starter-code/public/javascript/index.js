const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    //conseguir con AXIOS GET que devuleva todos los characteres
    //poner sus funciones get dela Learning
    charactersAPI.getFullList()
      .then(character => {
        character.forEach(characterInfo => {
          const characterInfo = {
            name: String,
            occupation: String,
            cartoon: Boolean,
            weapon: String
          };

          const listPoint =
            `<div class="character-info">
            <div class="name">${name}</div>
            <div class="occupation">${occupation}</div>
            <div class="cartoon">${cartoon}</div>
            <div class="weapon">${weapon}</div>
            </div>`
          document.getElementById('characters-list').innerHTML += listPoint
        })
      })
      .catch(error => {
        console.log('¡ops! error:', error)
      })
  }


  document.getElementById('fetch-one').onclick = function () {
    // Capturar el id del input
    const searchId = document.getElementsByName('character-id')[0].value

    // Capturar campos del personaje
    const characterInputs = document.querySelectorAll('.character-info div')

    // Promesa de la peticion AXIOS GET que devuelve el caracter by Id
    charactersAPI.getOneRegister(searchId)
      .then(character => {
        const { name, occupation, weapon, cartoon } = character

        // introduce en el html las variables recibidas 
        characterInputs[0].innerHTML = name
        characterInputs[1].innerHTML = occupation
        characterInputs[2].innerHTML = weapon
        characterInputs[3].innerHTML = cartoon
      })

      .catch(error => {
        console.log('Ese personaje no existe', error)
        characterInputs[0].innerHTML = '---------------------------------------'
        characterInputs[1].innerHTML = '---------------------------------------'
        characterInputs[2].innerHTML = '---------------------------------------'
        characterInputs[3].innerHTML = '---------------------------------------'

      })

  }

  document.getElementById('delete-one').onclick = function () {
    // Capturar el id del input del html
    const searchId = document.getElementsByName('character-id-delete')[0].value

    charactersAPI.deleteOneRegister(searchId)
      .then(x => {
        const listRemove = document.getElementById('delete-one')
        console.log('Personaje borrado')
      })
      .catch(error => {
        const listRemove = document.getElementById('delete-one')
        console.log('¡ops! error:', error)
      })

  }


  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function (event) {
    const newCharacterInputs = document.querySelectorAll('#new-character-form input')

    event.preventDefault()

    const character = {
      name: newCharacterInputs[0].value,
      occupation: newCharacterInputs[1].value,
      weapon: newCharacterInputs[2].value,
      cartoon: newCharacterInputs[3].checked
    }
    console.log(character)

    charactersAPI.createOneRegister(character)
      .then(myCharacter =>{}

  }
})

