const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(allCharacters => {
        let text = ''
        allCharacters.data.forEach(elm => text += `<li>${elm.name} (${elm.occupation})</li>`)
        document.querySelector('#allCharacters').innerHTML = text
      })
      .catch(err => console.log('Hubo un error!', err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterId = document.getElementsByName('character-id')[0].value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {
        const inputs = document.querySelectorAll('#edit-character-form div input')

        inputs[0].value = response.data.id
        inputs[1].value = response.data.name
        inputs[2].value = response.data.occupation
        inputs[3].value = response.data.weapon
      })
      .catch(err => console.log(err))
    

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterId = document.getElementsByName('character-id-delete')[0].value

    if (characterId) {
      charactersAPI
        .deleteOneRegister(characterId)
        .then(() => console.log('Se ha eliminado un personaje'))
        .catch(err => console.log('Error!', err))
    }

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const characterId = document.getElementsByName('character-id')[0].value

    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterDetails = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value
    }

     charactersAPI
      .updateOneRegister(characterId, characterDetails)
      .then(() => {
         document.querySelector('#edit-character-form').reset()})
      .catch(err => console.log('Error!', err))
  
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterDetails = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value
    }

    charactersAPI
      .createOneRegister(characterDetails)
      .then(() => console.log('Se ha creado un nuevo personaje!'))
      .catch(err => console.log('Error!', err))

      
  });
});
