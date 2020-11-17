const charactersAPI = new APIHandler();

//  ****  SEE ALL ****

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
      updateCharactersList()
  });


//  ****  SEE ONE ****
  
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterID = document.querySelector('.operation input').value
    
    charactersAPI
      .getOneRegister(characterID)
      .then(res => {
        document.querySelector('#selected-character').innerHTML = `<article class="character-info">
                                                                    <div class="id">id: <span>${res.data.id}</span></div>
                                                                    <div class="name">Name: <span>${res.data.name}</span></div>
                                                                    <div class="occupation">Occupation: <span>${res.data.occupation}</span></div>
                                                                    <div class="cartoon">Is a Cartoon?: <span>${res.data.cartoon}</span></div>
                                                                    <div class="weapon">Weapon: <span>${res.data.weapon}</span></div>
                                                                  </article>`
      })
      .then(() => document.querySelector('.operation input').value = '')
      .catch(err => console.log('Error casi fatal!!', err))
  });


//  ****  DELETE ONE ****

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterID = document.querySelector('.delete input').value
    
    charactersAPI
      .deleteOneRegister(characterID)
      .then(() => {
        updateCharactersList()
        document.querySelector('#selected-character').innerHTML = ''
        document.querySelector('#delete-one').setAttribute('style', 'background-color: green;')
      })
      .then(() => {
        document.querySelector('.delete input').value = ''
        window.setTimeout(() => {document.querySelector('.delete button').setAttribute('style', 'background-color: none;')}, 2000)
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#delete-one').setAttribute('style', 'background-color: red;')
      })
  });


//  ****  EDIT ONE ****

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterID = inputs[0].value
    const character = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[ 3 ].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(characterID, character)
      .then(() => {
        updateCharactersList()
        document.querySelector('#edit-character-form button').setAttribute('style', 'background-color: green;')
        document.querySelector('#edit-character-form').reset()

      })
      .then(() => {
        window.setTimeout(() => {document.querySelector('#edit-character-form button').setAttribute('style', 'background-color: none;')}, 2000)
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#delete-one').setAttribute('style', 'background-color: red;')
      })
  });


//  ****  CREATE ONE ****

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll('#new-character-form input')

    const newCharacter = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(() => {
        updateCharactersList()
        document.querySelector('#new-character-form button').setAttribute('style', 'background-color: green;')
        document.querySelector('#new-character-form').reset()
      })
      .then(() => {
        window.setTimeout(() => {document.querySelector('#new-character-form button').setAttribute('style', 'background-color: none;')}, 2000)
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#delete-one').setAttribute('style', 'background-color: red;')
      })
  });
});



//  ****  UPDATE FUNCTION ****

function updateCharactersList() {
  charactersAPI
    .getFullList()
    .then(response => {
      let charactersArr = response.data
      let characterCardHtml = ''

      charactersArr.forEach(elm => {
        characterCardHtml += `<article class="character-info">
                                <div class="id">id: <span>${elm.id}</span></div>
                                <div class="name">Name: <span>${elm.name}</span></div>
                                <div class="occupation">Occupation: <span>${elm.occupation}</span></div>
                                <div class="cartoon">Is a Cartoon?: <span>${elm.cartoon}</span></div>
                                <div class="weapon">Weapon: <span>${elm.weapon}</span></div>
                              </article>`
      });

      document.querySelector('#characters-list').innerHTML = characterCardHtml
    })
    .catch(err => console.log('Error casi fatal!!', err))
}