/*jshint esversion: 6 */

const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI

      .getFullList()
      .then(response => {

        let dataHtml = ''
        let allData = response.data.splice(301, 1)

        

        allData.forEach(elm => {
          dataHtml += `<strong>Name: </strong>${elm.name}<br><br><strong>Occupation: </strong>${elm.occupation}<br><br><strong>Cartoon: </strong>${elm.cartoon}<br><br><strong>Weapon: </strong>${elm.weapon}<br><br><strong>ID: </strong>${elm.id}`
        })

        document.querySelector('.character-info').innerHTML = dataHtml
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
        inputs[4].value = response.data.checked

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
      cartoon: inputs[3].checked
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
      cartoon: inputs[4].checked
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
