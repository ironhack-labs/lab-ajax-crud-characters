const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  ////1. ReadAll
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI
      .getFullList()
      .then(response => {

        let allCharacters = response.data
        let allCharactersHtml = ''

        allCharacters.forEach(elm => {

          allCharactersHtml += `<div class="character-info">
            <div class="name"><strong>Name:</strong> ${elm.name}</div>
            <div class="occupation"><strong>Occupation:</strong> ${elm.occupation}</div>
            <div class="cartoon"><strong>Is a Cartoon?:</strong> ${elm.cartoon}</div>
            <div class="weapon"><strong>Weapon:</strong> ${elm.weapon}</div>
          </div>`
        })
        document.querySelector('.character-info').innerHTML = allCharactersHtml
      })
      .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
  });



  ////2. ReadOne
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const oneCharacterId = document.querySelector('.operation input').value


    charactersAPI
      .getOneRegister(oneCharacterId)
      .then(response => {

        let oneCharacterValue = response.data
        let oneCharacterHtml = ''

        oneCharacterHtml += `<div class="character-info">
            <div class="name"><strong>Name:</strong> ${oneCharacterValue.name}</div>
            <div class="occupation"><strong>Occupation:</strong> ${oneCharacterValue.occupation}</div>
            <div class="cartoon"><strong>Is a Cartoon?:</strong> ${oneCharacterValue.cartoon}</div>
            <div class="weapon"><strong>Weapon:</strong> ${oneCharacterValue.weapon}</div>
          </div>`

        document.querySelector('.character-info').innerHTML = oneCharacterHtml
      })
      .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
  })



  ////3. DeleteOne
  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterInputs = document.querySelector('.delete').value

    charactersAPI
      .deleteOneRegister(characterInputs)
      .then(() => { document.querySelector('#delete-one').reset() })
      .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
  });



  ////4. CreateOne
  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterValues = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked,
    }

    charactersAPI
      .createOneRegister(characterValues)
      .then(() => {

        document.querySelector('#send-data')
        document.querySelector('#new-character-form').reset()

      })
      .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
  });



  ////5. EditOne
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const characterId = document.querySelector('#edit-character-form input').value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {

        const inputs = document.querySelectorAll('#edit-character-form input')

        inputs[0].value = response.data.name
        inputs[1].value = response.data.occupation
        inputs[2].value = response.data.weapon
        inputs[3].value = response.data.cartoon

        const characterValues = {
          name: inputs[0].value,
          occupation: inputs[1].value,
          weapon: inputs[2].value,
          cartoon: inputs[3].checked,
        }

        charactersAPI
          .updateOneRegister(characterId, characterValues)
          .then(() => console.log('SE HA ACTUALIZADO!'))
          .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
      })
      .catch(err => console.log('SE HA PRODUCIDO UN ERROR!:', err))
  });
});
