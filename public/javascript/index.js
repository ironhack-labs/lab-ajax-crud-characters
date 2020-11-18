const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {

  //Mostrar todos

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI
    .getFullList()
    .then(response => {
      let allCharacters = response.data
      let charactersHtml = ''

      allCharacters.forEach(elm => {
        charactersHtml += `<div class="character-info">
                          <div class="name">Character Name: ${elm.name}</div>
                          <div class="occupation">Character Occupation: ${elm.occupation}</div>
                          <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                          <div class="weapon">Character Weapon: ${elm.weapon}</div>
                        </div>`
      })

      document.querySelector('.character-info').innerHTML = charactersHtml

    })
    .catch(err => console.log('HUBO UN ERROR!', err))

  });

  //Mostrar uno

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault();
    const characterID = document.querySelector('.operation input').value

    charactersAPI
    .getOneRegister(characterID)
    .then(response => {

      let fetchedCharacter = response.data
     
      let fetchedCharacterHtml = ''

      fetchedCharacterHtml += `<div class="character-info">
                        <div class="name">Name: ${fetchedCharacter.name}</div>
                        <div class="occupation">Occupation: ${fetchedCharacter.occupation}</div>
                        <div class="cartoon">Is a Cartoon?: ${fetchedCharacter.cartoon}</div>
                        <div class="weapon">Weapon: ${fetchedCharacter.weapon}</div>
                      </div>`


     document.querySelector('.character-info').innerHTML = fetchedCharacterHtml

   })
   .catch(err => console.log('HUBO UN ERROR!', err))

  });

  //Eliminar uno

  document.getElementById('delete-one').addEventListener('click', function (event) {

  event.preventDefault();
  const deletedCharacter = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(deletedCharacter)
      .then(() => {
         document.querySelector('#delete-one').style.backgroundColor = 'green'
      })
      .catch(document.querySelector('#delete-one').style.backgroundColor = 'red')

  });

  //Editar uno

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
        id: inputs[0].value,
        name: inputs[1].value,
        occupation: inputs[2].value,
        weapon: inputs[4].value,
        cartoon: inputs[3].checked
    }

    const characterIDvalue = document.querySelector('#edit-character-form input').value


    charactersAPI
        .updateOneRegister(characterIDvalue, characterInfo)
        .then(() => {
          document.querySelector('#update-data').style.backgroundColor = 'green'
        })
        .catch(err => console.log('HUBO UN ERROR!', err))

  });

  //Añadir uno

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

        document.querySelector('#send-data').style.backgroundColor = 'green'
        document.querySelector('#new-character-form').reset()
      })
      .catch(err => console.log('HUBO UN ERROR!', err))

  });
});
