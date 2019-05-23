const charactersAPI = new APIHandler("https://minions-api.herokuapp.com") // Ruta de API
const newCharacter = document.querySelectorAll('#new-character-form input')
const updateChar = document.querySelectorAll('#edit-character-form input')
const deleteChar = document.querySelectorAll('#del input')
const searchChar = document.querySelectorAll('#searchOne input')
const all = document.getElementsByClassName('characters-container')[0]

$(document).ready(() => {
  // Find All
  document.getElementById('fetch-all').onclick = e => {
    charactersAPI.getFullList()
      .then(response => {
        response.forEach(elm => {
          const contenido = `${elm.id}, ${elm.name}, ${elm.weapon}, ${elm.occupation} <br>`
          all.innerHTML += contenido
        })
      })
      .catch(error => console.log('¡ops! error:', error))
  }

  // Clear
  document.getElementById('clear').onclick = e => {
    charactersAPI.getClear()
      .then(response => {
        all.innerHTML = ''
      })
      .catch(error => console.log('¡ops! error:', error))
  }

  // Find One
  document.getElementById('fetch-one').onclick = e => {

    const id = searchChar[0].value

    charactersAPI.getOneRegister(id)
      .then(response => {
        const { id, name, occupation, weapon } = response.data

        updateChar.forEach(elm => {
          switch (elm.attributes.name.value) {
            case 'chr-id': elm.value = id; break
            case 'name': elm.value = name; break
            case 'occupation': elm.value = occupation; break
            case 'weapon': elm.value = weapon; break
          }
          elm.style.color = 'white'
          elm.style.background = 'green'
        })
        searchChar[0].value = ''
      })
      .catch(error => {

        updateChar.forEach(elm => {
          elm.value = 'Id not found'
          elm.style.color = 'white'
          elm.style.background = 'red'
        })
        searchChar[0].value = ''
        console.log('¡ops! error:', error)
      })


  }
  //Delete 
  document.getElementById('delete-one').onclick = e => {

    const id = deleteChar[0].value

    charactersAPI.deleteOneRegister(id)
      .then(x => {
        console.log(x)
      })
      .catch(error => console.log('¡ops! error:', error))
  }
  // Update
  document.getElementById('edit-character-form').onsubmit = e => {

    e.preventDefault()

    const id = updateChar[0].value
    const update = {
      name: updateChar[1].value,
      occupation: updateChar[2].value,
      weapon: updateChar[3].value,
      cartoon: updateChar[4].checked
    }

    charactersAPI.updateOneRegister(id, update)
      .then(x => updateChar.forEach(input => input.value = ""))
      .catch(error => console.log('¡ops! error:', error))

  }
  //Create new 
  document.getElementById('new-character-form').onsubmit = e => {

    e.preventDefault()

    const character = {
      name: newCharacter[0].value,
      occupation: newCharacter[1].value,
      weapon: newCharacter[2].value,
      cartoon: newCharacter[3].checked
    }

    // Llamada a la funcion
    charactersAPI.createOneRegister(character)
      .then(x => {
        newCharacter.forEach(input => input.value = "")
      })
      .catch(error => console.log('¡ops! error:', error))

  }

})
// ANTI  MANU
charactersAPI.deleteMuch()
