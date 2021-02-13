const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((charactersList) => {
      charactersList.data.forEach(char => {
        let character = document.createElement('div')
        character.setAttribute('class', 'character-info')
        character.innerHTML = `${char.name} - ${char.occupation} - ${char.cartoon} - ${char.weapon}`
        document.getElementById('all-characters').appendChild(character)
      });
      console.log(charactersList.data)
    })

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let charId = document.getElementById('get-id').value
    charactersAPI
    .getOneRegister(charId)
      .then((char) => {
        let character = document.createElement('div')
        character.setAttribute('class', 'character-info')
        character.innerHTML = `${char.data.name}`
        document.getElementById('all-characters').appendChild(character)
      })
  });
// ---------------------------------------------------
  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.getElementById('character_to_delete').value
    charactersAPI.deleteOneRegister(characterId)
    .then(res => {
      console.log(res.data)
    })
    .catch(e => console.log(e))
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const editCharacter = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked
    }

    charactersAPI
      .updateOneRegister(editCharacter)
      .then(res => {
        console.log("Editado correctamente")
      })
      .catch(e => console.log(e))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    
    const newCharacter = {
      id: event.target[0].value,
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
      cartoon: event.target[4].checked
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(res => {
        console.log('Registro completado')
      })
      .catch(e => console.log(e))
  });
});