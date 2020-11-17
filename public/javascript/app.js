/*jshint esversion: 6 */

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI

      .getFullList()
      .then(response => {

        let name = response.data[12].name
        let character = response.data[12].occupation
        let cartoon = response.data[12].cartoon
        let weapon = response.data[12].weapon
        let id = response.data[12].id


        document.querySelector('.name').innerHTML = `<strong>Name:</strong> ${name}`
        document.querySelector('.occupation').innerHTML = `<br><strong>Occupation:</strong> ${character}`
        document.querySelector('.cartoon').innerHTML = `<br><strong>Cartoon:</strong> ${cartoon}`
        document.querySelector('.weapon').innerHTML = `<br><strong>Weapon:</strong> ${weapon}`
        document.querySelector('.id').innerHTML = `<br><strong>Id:</strong> ${id}`

      })

      .catch(err => console.log('ERROR', err))

  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const idCharacter = document.querySelector('#gone').value

    charactersAPI
      .getOneRegister(idCharacter)
      .then(response => {

        document.querySelector('.id').innerHTML = `<br><strong>Id:</strong> ${response.data.id}`
        document.querySelector('.name').innerHTML = `<strong>Name:</strong> ${response.data.name}`
        document.querySelector('.occupation').innerHTML = `<br><strong>Occupation:</strong> ${response.data.occupation}`
        document.querySelector('.cartoon').innerHTML = `<br><strong>Cartoon:</strong> ${response.data.cartoon}`
        document.querySelector('.weapon').innerHTML = `<br><strong>Weapon:</strong> ${response.data.weapon}`

        const inputs = document.querySelectorAll('#edit-character-form input')

        inputs[0].value = response.data.id
        inputs[1].value = response.data.name
        inputs[2].value = response.data.occupation
        inputs[3].value = response.data.weapon
        inputs[4].value = response.data.checker

        document.querySelector('#fetch-character-form').reset()

      })
      .catch(err => console.log('ERROR', err))


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checker
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => document.querySelector('#new-character-form').reset())
      .catch(err => console.log('ERROR: ', err))
  })



  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checker
    }

    const characterId = document.querySelector('#edit-character-form input').value

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(() => document.querySelector('#edit-character-form').reset())
      .catch(err => console.log('ERROR', err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {


    event.preventDefault()

    const idCharacter = document.querySelector('#done').value

    charactersAPI
      .deleteOneRegister(idCharacter)
      .then(() => document.querySelector('#delete-character-form').reset())
      .catch(err => console.log('ERROR', err))

  });

});

        // return document.querySelector('#delete-one').innerHTML = `<button id="delete-one" class="inactive"><p class="inactive" style="color:white">DELETE ONE</p>`
        // return document.querySelector('.editup').innerHTML = `<button id="send-data" class="active editup"><p style="color:white">UPDATE</p>`
