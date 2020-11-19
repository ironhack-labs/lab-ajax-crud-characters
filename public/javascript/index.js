const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {

  function updateCharList() {
    charactersAPI
      .getFullList()
      .then(response => {

        let allCharacters = response.data.reverse()
        let charHTML = ''

        for (let i = 0; i < 6; i++) { //he usado un for en vez de un forEach porque son muchos elementos
          charHTML +=
            `<div class="character-info">
              <div class="id">Character Id: ${allCharacters[i].id}</div>
                <div class="name">Character Name: ${allCharacters[i].name}</div>
                <div class="occupation">Character Occupation: ${allCharacters[i].occupation}</div>
                <div class="cartoon">Is a Cartoon?: ${allCharacters[i].cartoon}</div>
                <div class="weapon">Character Weapon: ${allCharacters[i].weapon}</div>
                </div>`
        }
        document.querySelector(".characters-container").innerHTML = charHTML
      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  }

  document.getElementById('fetch-all').addEventListener('click', ((event) => {
    updateCharList()
  }))

  document.getElementById('fetch-one').addEventListener('click', ((event) => {
    const input = document.querySelector('#character-id').value
    charactersAPI
      .getOneRegister(input)
      .then(elm => {
        const character = elm.data
        const newChar =
          ` <div class="character-info">
            <div class="id">Character Id: ${character.id}</div>
            <div class="name">Character Name: ${character.name}</div>
            <div class="occupation">Character Occupation: ${character.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${character.isCartoon}</div>
            <div class="weapon">Character Weapon: ${character.weapon}</div>
            </div>`
        document.querySelector(".characters-container").innerHTML = newChar
      })
      .then(() => {
        document.querySelector('#character-id').value = ''
      })
      .catch(err => console.log('HUBO UN ERROR!', err))
  }))

  document.getElementById('delete-one').addEventListener('click', ((event) => {
    let input = document.querySelector('#character-id-delete').value
    const button = document.querySelector('#delete-one')
    charactersAPI
      .deleteOneRegister(input)
      .then((res) => {
        if (res.data.name === 'CastError') {
          button.setAttribute('class', 'error')
        } else {
          button.setAttribute('class', 'success')
          updateCharList()
        }
        document.querySelector('#character-id-delete').value = ''
      })
      .catch(err => {
        button.setAttribute('class', 'error')
        console.log('HUBO UN ERROR!', err)
      })
  }));

  document.getElementById('edit-character-form').addEventListener('submit', ((event) => {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')
    const button = document.querySelector('#edit-character-form button')

    const newCharacterInfo = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(inputs[0].value, newCharacterInfo)
      .then((res) => {
        if (res.data.name === 'CastError') {
          button.setAttribute('class', 'error')
        } else {
          button.setAttribute('class', 'success')
          updateCharList()
        }
        inputs.forEach(elm => elm.value = '')
      })
      .catch(err => {
        button.setAttribute('class', 'error')
        console.log('HUBO UN ERROR!', err)
      })
  }));

  document.getElementById('new-character-form').addEventListener('submit', ((event) => {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')
    const button = document.querySelector('#new-character-form button')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then((res) => {
        if (res.data.name === 'CastError') {
          button.setAttribute('class', 'error')
        } else {
          button.setAttribute('class', 'success')
          updateCharList()
        }
        inputs.forEach(elm => elm.value = '')
      })
      .catch(err => {
        button.setAttribute('class', 'error')
        console.log('HUBO UN ERROR!', err)
      })

  }));
})
