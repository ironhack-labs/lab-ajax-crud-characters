const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

//READ ALL
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI.getFullList()
      .then(response => {
        const allCharacters = response.slice(20, 24)

        const containerDOM = document.querySelector('.characters-container')

        allCharacters.forEach(elm => {
          containerDOM.innerHTML += `<div class="character-info">
        <div class="name">Character Name:${elm.name}</div>
        <div class="occupation">Character Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${elm.cartoon}</div>
        <div class="weapon">Character Weapon: ${elm.weapon}</div>
      </div>`
        })
      })
      .catch(error => console.log('Oh No! Error is: ', error))
  });

  //READ ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

    const inputDOM = document.querySelector('#one-register')

    charactersAPI.getOneRegister(inputDOM.value)
      .then(response => {

        const containerDOM = document.querySelector('.characters-container')

        containerDOM.innerHTML = ''

        containerDOM.innerHTML += `<div class="character-info">
        <div class="name">Character Name:${response.name}</div>
        <div class="occupation">Character Occupation: ${response.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${response.cartoon}</div>
        <div class="weapon">Character Weapon: ${response.weapon}</div>
      </div>`

      })
      .catch(error => console.log('Oh No! Error is: ', error))
  });

  //DELETE
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const inputDOM = document.querySelector('#one-delete')

    charactersAPI.deleteOneRegister(inputDOM.value)
  });

  //UPDATE
  document.querySelector('#get-data').onclick = () => {
    const inputs = document.querySelectorAll('#edit-character-form input')

    charactersAPI.getOneRegister(inputs[0].value)
      .then(response => {
        inputs[1].value = response.name
        inputs[2].value = response.occupation
        inputs[3].value = response.weapon
      })
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')
    const updatedCharacter = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value
    }
    inputs[4].value == 'on' ? updatedCharacter.cartoon = false : updatedCharacter.cartoon = true

    charactersAPI.updateOneRegister(inputs[0].value, updatedCharacter)
    document.querySelector('#edit-character-form').reset()


  });

  //CREATE
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')
    const character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value
    }
    inputs[3].value == 'on' ? character.cartoon = false : character.cartoon = true

    charactersAPI.createOneRegister(character)


    document.querySelector('#new-character-form').reset()

  });


});
