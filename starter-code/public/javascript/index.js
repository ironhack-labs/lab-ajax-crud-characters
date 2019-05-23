const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/characters")

$(document).ready(() => {

  // Fetch All

  document.getElementById('fetch-all').onclick = function () {

    showDom()
    clearInfo()

    // Promesa de la peticion Axios Get que devuelve todos los caracters
    charactersAPI.getFullList()
      .then(character => {
        character.forEach(element => {
          const { name, occupation, weapon, cartoon } = element

          const listPoint =
            `<div class="character-info">
            <div class="name">${name}</div>
            <div class="occupation">${occupation}</div>
            <div class="cartoon">${cartoon}</div>
            <div class="weapon">${weapon}</div>
          </div>`
          document.getElementById('characters-list').innerHTML += listPoint
          // cambiar color boton
          const listRemove = document.querySelector('#fetch-all')
          listRemove.style.background = 'none'
        })
      })
      .catch(error => {
        console.log('¡ops! error:', error)
        // cambiar color boton
        const listRemove = document.querySelector('#fetch-all')
        listRemove.style.background = 'red'
      })
  }





  // Fetch One

  document.getElementById('fetch-one').onclick = function () {

    showInfo()
    clearDom()

    // Capturar el id del input
    const searchId = document.getElementsByName('character-id')[0].value
    // Capturar campos del personaje
    const characterInputs = document.querySelectorAll('.character-info div')
    // Promesa de la peticion Axios Get que devuelve el caracter by Id
    charactersAPI.getOneRegister(searchId)
      .then(character => {
        const { name, occupation, weapon, cartoon } = character
        // introduce en el html las variables recibidas 
        characterInputs[0].innerHTML = name
        characterInputs[1].innerHTML = occupation
        characterInputs[2].innerHTML = weapon
        characterInputs[3].innerHTML = cartoon
        // cambiar color boton
        const listRemove = document.querySelector('#fetch-one')
        listRemove.style.background = 'none'
      })
      .catch(error => {
        console.log('Ese personaje no existe', error)
        characterInputs[0].innerHTML = '---------------------------------------'
        characterInputs[1].innerHTML = '---------------------------------------'
        characterInputs[2].innerHTML = '---------------------------------------'
        characterInputs[3].innerHTML = '---------------------------------------'
        // cambiar color boton
        const listRemove = document.querySelector('#fetch-one')
        listRemove.style.background = 'red'

      })

  }




  // Delete

  document.getElementById('delete-one').onclick = function () {

    // Capturar el id del input
    const searchId = document.getElementsByName('character-id-delete')[0].value
    charactersAPI.deleteOneRegister(searchId)
      .then(x => {
        // cambiar color boton
        const listRemove = document.getElementById('delete-one')
        listRemove.style.background = 'none'
        console.log('Personaje borrado')
      })
      .catch(error => {
        // cambiar color boton
        const listRemove = document.getElementById('delete-one')
        listRemove.style.background = 'red'
        console.log('¡ops! error:', error)
      })

  }






  // New Character

  const newCharacterInputs = document.querySelectorAll('#new-character-form input')

  document.getElementById('new-character-form').onsubmit = e => {

    e.preventDefault()

    const character = {
      name: newCharacterInputs[0].value,
      occupation: newCharacterInputs[1].value,
      weapon: newCharacterInputs[2].value,
      cartoon: newCharacterInputs[3].checked
    }
    console.log(character)

    charactersAPI.createOneRegister(character)
      .then(myCharacter => {
        const { name, occupation, weapon, cartoon, id } = myCharacter
        console.log(name, occupation, weapon, cartoon, id)
        newCharacterInputs.forEach(input => input.value = "")
        // Cambiar color boton
        const listRemove = document.querySelector('#new-character-form button')
        listRemove.style.background = 'none'
      })
      .catch(error => {
        // Cambiar color boton
        const listRemove = document.querySelector('#new-character-form button')
        listRemove.style.background = 'red'
        console.log('', error)
      })
  }








  // Update

  document.getElementById('obtain-data').onclick = () => {
    const updateCharacterInputs = document.querySelectorAll('#edit-character-form input')
    const updateId = updateCharacterInputs[0].value

    charactersAPI.getOneRegister(updateId)
      .then(character => {
        const { name, occupation, weapon, cartoon } = character
        console.log(name, occupation, weapon, cartoon)
        updateCharacterInputs[1].value = name
        updateCharacterInputs[2].value = occupation
        updateCharacterInputs[3].value = weapon
        updateCharacterInputs[4].checked = cartoon
        // Cambiar color boton
        const listRemove = document.querySelector('#obtain-data')
        listRemove.style.background = 'none'
      })
      .catch(error => {
        console.log('Ese personaje no existe', error)
        updateCharacterInputs[1].value = '---------------------------------------'
        updateCharacterInputs[2].value = '---------------------------------------'
        updateCharacterInputs[3].value = '---------------------------------------'
        // Cambiar color boton
        const listRemove = document.querySelector('#obtain-data')
        listRemove.style.background = 'red'
      })
  }


  document.getElementById('edit-character-form').onsubmit = e => {

    const updateCharacterInputs = document.querySelectorAll('#edit-character-form input')
    const updateId = updateCharacterInputs[0].value

    e.preventDefault()

    const updateCharacter = {
      name: updateCharacterInputs[1].value,
      occupation: updateCharacterInputs[2].value,
      weapon: updateCharacterInputs[3].value,
      cartoon: updateCharacterInputs[4].checked,
    }

    charactersAPI.updateOneRegister(updateId, updateCharacter)
      .then(response => {
        const { name, occupation, weapon, cartoon } = response
        console.log(name, occupation, weapon, cartoon)
        // cambiar color boton
        const listRemove = document.querySelector('#edit-character-form button')
        listRemove.style.background = 'none'
      })
      .catch(error => {
        console.log('Ese personaje no existe', error)
        // cambiar color boton
        const listRemove = document.querySelector('#edit-character-form button')
        listRemove.style.background = 'red'
      })

    updateCharacterInputs.forEach(element => element.value = '')

  }



  // Clear Dom

  const clearDom = () => {
    const listRemove = document.getElementById('characters-list')
    listRemove.style.display = 'none'
  }

  const showDom = () => {
    const listRemove = document.getElementById('characters-list')
    listRemove.style.display = 'block'
  }


  const clearInfo = () => {
    const listRemove = document.querySelector('.character-info')
    listRemove.style.display = 'none'
  }

  const showInfo = () => {
    const listRemove = document.querySelector('.character-info')
    listRemove.style.display = 'block'
  }

})
