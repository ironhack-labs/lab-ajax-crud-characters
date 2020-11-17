const charactersAPI = new APIHandler

window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI

      .getFullList()
      .then(response => {
        let allCharacters = response.data.reverse()

        let charactersList = ""


        allCharacters.forEach(elm => {
          charactersList += `<div class="character-info">
              <div class="id">ID: ${elm.id}</div>
              <div class="id">Name: ${elm.name}</div>
              <div class="id">Occupation: ${elm.occupation}</div>
              <div class="id">Its a cartoon?: ${elm.cartoon} </div>
              <div class="id">Weapon: ${elm.weapon} </div>
            </div>`

        })


        document.querySelector('.character-info').innerHTML = charactersList
      })
      .catch(err => console.log('HUBO UN ERROR!', err))


  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterID = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(characterID)
      .then(elm => {
        document.querySelector('.character-info')
        document.querySelector('.id').innerHTML = `ID: ${elm.data.id}`
        document.querySelector('.name').innerHTML = `Name: ${elm.data.name}`
        document.querySelector('.occupation').innerHTML = `Occupation: ${elm.data.occupation}`
        document.querySelector('.cartoon').innerHTML = `Its a cartoon?: ${elm.data.cartoon}`
        document.querySelector('.weapon').innerHTML = `Weapon: ${elm.data.weapon}`
      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });






  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterID = document.querySelector('.operation-delete input').value

    charactersAPI
      .deleteOneRegister(characterID)
      .then()
      .catch(err => console.log('HUBO UN ERROR!', err))

  });










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

    const characterID = document.querySelector('#id-edit').value


    charactersAPI
      .updateOneRegister(characterID, characterInfo)
      .then(response => console.log(response))
      .catch(err => console.log('HUBO UN ERROR!', err))

  })

});



document.getElementById('new-character-form').addEventListener('submit', function (event) {


        event.preventDefault()

        const inputs = document.querySelectorAll('#new-character-form input')


        const characterInfo = {
          name: inputs[0].value,
          occupation: inputs[1].value,
          weapon: inputs[2].value,
          cartoon: inputs[3].checked,
        }
  
        console.log(characterInfo)

        charactersAPI
          .createOneRegister(characterInfo)
          .then(response => console.log(response))
          .catch(err => console.log('HUBO UN ERROR!', err))

});


