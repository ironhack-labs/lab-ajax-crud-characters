const charactersAPI = new APIHandler('https://minions-api.herokuapp.com')

window.addEventListener('load', () => {

  // -----------> FETCH ALL <-----------
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {

        // console.log(response)
        let allCharacters = response.data
        let charactersHtml = ""

        allCharacters.forEach(elm => {
          charactersHtml += `<div class="character-info">
                                <div class="name">Name: ${elm.name}</div>
                                <div class="occupation">Occupation: ${elm.occupation}</div>
                                <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                                <div class="weapon">Weapon: ${elm.weapon}</div>
                              </div>`
        })
        document.querySelector(".characters-container").innerHTML = charactersHtml
      })
      .catch(err => console.log('There was an error!', err))
  })

  // -----------> FETCH ONE <-----------
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterId = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {

        let character = response.data

        // console.log(character)
        let characterHtml = ""
        characterHtml += `<div class="character-info">
                                <div class="name">Name: ${character.name}</div>
                                <div class="occupation">Occupation: ${character.occupation}</div>
                                <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
                                <div class="weapon">Weapon: ${character.weapon}</div>
                          </div>`
        
        document.querySelector(".characters-container").innerHTML = characterHtml
        document.querySelector('.search-id').reset()
      })
      .catch(err => console.log('There was an error!', err))

  })

  // -----------> DELETE <-----------
  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterId = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => {
        document.querySelector('.character-id-delete').reset()
        document.querySelector('#delete-one').style.backgroundColor = 'green'
      })
      .catch(() => document.querySelector('#delete-one').style.backgroundColor = 'red')
  })

  // -----------> EDIT <-----------
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked,
    }

    const characterId = document.querySelector('.edit-id').value

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(() => document.querySelector('#update').style.backgroundColor = 'green')
      .catch(err => console.log('There was an error!', err))
  })

  // -----------> CREATE <-----------
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => {
        document.querySelector('#new-character-form').reset()
        document.querySelector('#create').style.backgroundColor = 'green'
      })
      .catch(err => console.log('There was an error!', err))
  })
})
