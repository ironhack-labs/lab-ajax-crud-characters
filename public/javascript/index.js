const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

// Reference DOM objects for displaying characters
const domReferenceObject = document.querySelector('.character-info')
const domParentObject = document.querySelector('.characters-container')

window.addEventListener('load', () => {


  // Fetch all the characters
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    showCurrentCharacters()

  });

  // Fetch a single character by ID
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = event.target.parentNode.querySelector('input').value

    charactersAPI.getOneRegister(characterId)
      .then(fetchedCharacter => {

        showSingleCharacter(fetchedCharacter.data)
      }).catch(error => console.log('Error: ', error))

  });

  // Delete a character by ID
  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = event.target.parentNode.querySelector('input').value

    charactersAPI.deleteOneRegister(characterId)
      .then(() => {

        changeButtonColor(event.target, true)
        showCurrentCharacters()

      })
      .catch(error => {

        console.log('Error: ', error)
        changeButtonColor(event.target, false)

      })

  });

  // Edit character by ID
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')

    const myCharacter = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(myCharacter.id, myCharacter)
      .then((editedCharacter) => {

        changeButtonColor(event.target.querySelector('button'), true)
        showSingleCharacter(editedCharacter.data)
      })
      .catch(err => {

        console.log('Hubo un error!', err)
        changeButtonColor(event.target.querySelector('button'), false)

      })

  });

  // Create new character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const myCharacter = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(myCharacter)
      .then((createdCharacter) => {

        showSingleCharacter(createdCharacter.data)
        changeButtonColor(event.target.querySelector('button'), true)

      })
      .catch(err => {

        console.log('Hubo un error!', err)
        changeButtonColor(event.target.querySelector('button'), false)

      })

  })

  // Listener for the buttons to go back to the original color
  document.querySelectorAll('.dinamic-btn').forEach(elm => {

    elm.addEventListener('focusout', (event) => {

      event.target.style.background = '';

    })
  })
})

// We clean the characters from the screen
function cleanScreen() {

  for (let i = domParentObject.childNodes.length; i > 0; i--) {

    domParentObject.removeChild(domParentObject.lastChild)

  }

}


// Actualizar la lista de personajes
function showCurrentCharacters() {

  charactersAPI
    .getFullList()
    .then(allCharacters => {

      // We delete all current dom elements
      cleanScreen()

      // We create and draw all of the characters in the collection
      allCharacters.data.forEach(elm => {

        const newDomElement = createCard(elm)

        // We add the character into the view
        domParentObject.appendChild(newDomElement)

      })
    })
    .catch(err => console.log('Hubo un error!', err))
}

function showSingleCharacter(character) {

  cleanScreen()

  const newDomElement = createCard(character)
  domParentObject.appendChild(newDomElement)

}

function createCard(character) {

  const createdElement = domReferenceObject.cloneNode(true)

  createdElement.children[0].innerText += character.id
  createdElement.children[1].innerText += character.name
  createdElement.children[2].innerText += character.occupation
  createdElement.children[3].innerText += character.cartoon
  createdElement.children[4].innerText += character.weapon

  return createdElement

}

function changeButtonColor(target, succeed) {

  succeed ? target.style.background = "rgb(50, 200, 50)" : target.style.background = "rgb(200, 50, 50)"

}