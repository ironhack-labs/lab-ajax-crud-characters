const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/');

window.addEventListener('load', () => {

  let characterId

  // FETCH  ALL
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {

        let allCharacters = response.data
        let htmlCharacter = ''

        allCharacters.forEach(char => {

          htmlCharacter += `<div class="character-info">
            <div class="name">${char.name ? char.name : 'undefined'}</div>
            <div class="occupation">${char.occupation ? char.occupation : 'undefined'}</div>
            <div class="cartoon">${char.cartoon ? char.cartoon : 'undefined'}</div>
            <div class="weapon">${char.weapon ? char.weapon : 'undefined'}</div>
          </div>`

        })

        document.querySelector('.characters-container').innerHTML = htmlCharacter

      })
      .catch(err => console.log('error!!!!!', err))
  });

  //  FETCH ONE
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    characterId = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {

        let char = response.data
        let htmlCharacter = `<div class="character-info">
            <div class="name">${char.name ? char.name : 'undefined'}</div>
            <div class="occupation">${char.occupation ? char.occupation : 'undefined'}</div>
            <div class="cartoon">${char.cartoon}</div>
            <div class="weapon">${char.weapon ? char.weapon : 'undefined'}</div>
          </div>`

        document.querySelector('.characters-container').innerHTML = htmlCharacter

        //  PARA RELLENAR EL FORMULARIO DE EDIT
        const inputs = document.querySelectorAll('#edit-character-form input')

        inputs[0].value = char.name
        inputs[1].value = char.occupation
        inputs[2].value = char.weapon
        inputs[3].checked = char.cartoon

      })
      .catch(err => {
        console.log('ERRROR:', err)
        document.querySelector(".operation").innerHTML += `<p>Character ${characterId} not found.</p>`
      })

  });

  //  DELETE
  document.getElementById('delete-one').addEventListener('click', function (event) {

    characterId = document.querySelector(".delete input").value

    charactersAPI
      .deleteOneRegister(characterId)
      .then(resp => resp.data === null ? document.querySelector(".operation").innerHTML += `<p>Character ${characterId} not found.</p>` : document.querySelector(".delete").innerHTML += `<p>Character ${characterId} deleted!!</p>`)

  });

  //  EDIT
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    characterId = document.querySelector('.operation input').value  //  ID DEL FETCH ONE
    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      cartoon: inputs[3].checked,
      weapon: inputs[2].value
    }

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(updated => {

        //  CAMBIO DE CARTA DEL FETCH ONE AL EDITAR
        let char = updated.data
        let htmlCharacter = `<div class="character-info">
            <div class="name">${char.name ? char.name : 'undefined'}</div>
            <div class="occupation">${char.occupation ? char.occupation : 'undefined'}</div>
            <div class="cartoon">${char.cartoon}</div>
            <div class="weapon">${char.weapon ? char.weapon : 'undefined'}</div>
          </div>`

        document.querySelector('.characters-container').innerHTML = htmlCharacter

        document.querySelector('#edit-character-form #send-data').classList.add('green')

      })
      .catch(() => document.querySelector('#edit-character-form #send-data').classList.add('red'))

  });

  //  CREATE
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      cartoon: inputs[3].checked,
      weapon: inputs[2].value
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => document.querySelector('#new-character-form #send-data').classList.add('green'))
      .catch(() => document.querySelector('#new-character-form #send-data').classList.add('red'))

  });
});
