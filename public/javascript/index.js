const charactersAPI = new APIHandler();

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI
    .getFullList()
    .then(response => {

      let allCharacters = response.data.reverse()
      let characterHtml = ''

      allCharacters.forEach(elm => {
        characterHtml += `<div class="character-info">
        <div class="name">Id: <span>${elm.id}</span></div>
        <div class="name">Name: <span>${elm.name}</span></div>
        <div class="occupation">Occupation: <span>${elm.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?: <span>${elm.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${elm.weapon}</span></div>
      </div>`
      })

      document.querySelector('.characters-container').innerHTML = characterHtml
  })
  .catch(err => console.log('HUBO UN ERROR!', err))


  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characterIDvalue = document.querySelector('.operation input').value

    charactersAPI
        .getOneRegister(characterIDvalue)
        .then(elm => {

            inputInfoCharacter = `<div class="character-info">
            <div class="name">Id: <span>${elm.data.id}</span></div>
            <div class="name">Name: <span>${elm.data.name}</span></div>
            <div class="occupation">Occupation: <span>${elm.data.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${elm.data.cartoon}</span></div>
            <div class="weapon">Weapon: <span>${elm.data.weapon}</span></div>
          </div>`
          document.querySelector('.characters-container').innerHTML = inputInfoCharacter
        })
        .catch(err => console.log('HUBO UN ERROR!', err))

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const characterIDvalue = document.querySelector('.operation.delete input').value
    
    charactersAPI
    .deleteOneRegister(characterIDvalue)
    .then(() => {

    document.querySelector('#delete-one').style.backgroundColor = 'green'
   
  })
  .catch(document.querySelector('#delete-one').style.backgroundColor = 'red')

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const characterIDvalue = document.querySelector('#edit-character-form input').value
    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon:inputs[4].checked
        
    }
    charactersAPI
        .updateOneRegister(characterIDvalue, characterInfo)
        .then(() => document.querySelector('#data-send').style.backgroundColor = 'green',
                    document.querySelector('#edit-character-form').reset()
                    
        )
        .catch(document.querySelector('#data-send').style.backgroundColor = 'red')
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const characterInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon:inputs[3].checked
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => document.querySelector('#send-data').style.backgroundColor = 'green', 
                  document.querySelector('#new-character-form').reset()
                           
      )
      .catch(document.querySelector('#send-data').style.backgroundColor = 'red')

  });
});
