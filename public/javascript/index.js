const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {

  // FETCH ALL CHARACTERS
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        let allCharacters = response.data.slice(2, 8)
        let charactersHtml = ''

        allCharacters.forEach(elm => {
          charactersHtml += `<li class="characters">
                                <p>ID: ${elm.id}</p>
                                <p>Name: ${elm.name}</p>
                                <p>Occupation: ${elm.occupation}</p>
                                <p>Cartoon: ${elm.cartoon}</p>
                                <p>Weapon: ${elm.weapon}</p>
                            </li>`
        })

        document.querySelector('#charactersList').innerHTML = charactersHtml
      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });



  // FETCH ONE CHARACTER
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()                       // evita envio de formulario

    let characterIdValue = document.querySelector('.operation input').value

    charactersAPI.getOneRegister(characterIdValue)
      .then(response => {
        let allCharacters = [response.data]
        let charactersHtml = ''

        if (allCharacters[0] === null) {
          charactersHtml = 'Invalid ID'

        } else {
          allCharacters.forEach(elm => {
            charactersHtml += `<li class="characters">
                                <p>ID: ${elm.id}</p>
                                <p>Name: ${elm.name}</p>
                                <p>Occupation: ${elm.occupation}</p>
                                <p>Cartoon: ${elm.cartoon}</p>
                                <p>Weapon: ${elm.weapon}</p>
                            </li>`
          })
        }

        document.querySelector('#charactersList').innerHTML = charactersHtml
      })
      .catch(err => console.log('HUBO UN ERROR!', err))


  });



  // DELETE CHARACTER
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()                       // evita envio de formulario

    let characterIdValue = document.querySelector('.delete input').value

    charactersAPI.deleteOneRegister(characterIdValue)
      .then(() =>
        document.querySelector('#delete-one').style.backgroundColor = 'green'
      )
      .catch(err => document.querySelector('#delete-one').style.backgroundColor = 'red')
  });



  // NEW CHARACTER
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()                       // evita envio de formulario

    let createCharacter = document.querySelectorAll('#new-character-form input')
    let characterInfo = {
      name: createCharacter[0].value,
      occupation: createCharacter[1].value,
      weapon: createCharacter[2].value,
      cartoon: createCharacter[3].checked
    }

    charactersAPI.createOneRegister(characterInfo)
      .then(() =>

        document.querySelector('#send-data').style.backgroundColor = 'green')

      .catch(err => document.querySelector('#send-data').style.backgroundColor = 'red')

    console.log(createCharacter)

  });


  // EDIT CHARACTER
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()                       // evita envio de formulario

    let editCharacter = document.querySelectorAll('#edit-character-form input')
    let characterInfo = {
      id: editCharacter[0].value,
      name: editCharacter[1].value,
      occupation: editCharacter[2].value,
      weapon: editCharacter[3].value,
      cartoon: editCharacter[4].checked
    }

    let characterIdValue = document.querySelector('#edit-character-form input').value

    charactersAPI.updateOneRegister(characterIdValue, characterInfo)
      .then(() =>
        document.querySelector('#update-data').style.backgroundColor = 'green')

      .catch(err => document.querySelector('#update-data'))

  });

});