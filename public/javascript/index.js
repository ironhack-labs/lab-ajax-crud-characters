// const charactersAPI = new APIHandler('http://localhost:8000');
const charactersAPI = new APIHandler()

// Fetch all characters
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {

        let allCharacters = response.data
        let charactersHtml = ''
        allCharacters.forEach(elm => {
          charactersHtml += `<div class= "character-info">
                                <div class="name">Character Name: ${elm.name}</div>
                                <div class="occupation">Character Occupation: ${elm.occupation}</div>
                                <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                                <div class="weapon">Character Weapon: ${elm.weapon}</div>
                             </div>`
        })
        document.querySelector('.characters-container').innerHTML = charactersHtml
      })
      .catch(err => console.log('You got an error!', err))
  });

  // Fetch one character
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const charIDvalue = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(charIDvalue)
      .then(response => {

        let charactersHtml = ''
        charactersHtml += `<div class= "character-info">
                              <div class="name">Character Name: ${response.data.name}</div>
                              <div class="occupation">Character Occupation: ${response.data.occupation}</div>
                              <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
                              <div class="weapon">Character Weapon: ${response.data.weapon}</div>
                          </div>`
        document.querySelector('.characters-container').innerHTML = charactersHtml
      })
      .catch(err => console.log('You got an error!', err))
  });


  // Delete one character
  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const charIDvalue = document.querySelector('.delete input').value
    charactersAPI
      .deleteOneRegister(charIDvalue)
      .then(response => {

        //success/failure
        const deleteBtn = document.querySelector('#delete-one')
        if (response.data === null) {
          deleteBtn.style.backgroundColor = "red"
        }
        else {
          deleteBtn.style.backgroundColor = "green"
        }
      })

      .catch(err =>
        console.log('You got an error!', err)
      )
  });


  // Edit one character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputs = document.querySelectorAll('#edit-character-form input')
    const charInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    const charId = document.querySelector('#id').value

    charactersAPI
      .updateOneRegister(charId, charInfo)
      .then(response => {

        //success/failure
        const editBtn = document.querySelector('#edit-data')
        if (response.data.id !== null) {
          editBtn.style.backgroundColor = "green"
        }
        else {
          editBtn.style.backgroundColor = "red"
        }

        //empty fields
        document.querySelector('#edit-character-form').reset()
      })

      .catch(err => console.log('You got an error!', err))
  });



  // Create new character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const charInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }
    charactersAPI
      .createOneRegister(charInfo)
      .then(response => {

        //success/failure
        const createBtn = document.querySelector('#send-data')
        if (response.data.id !== null) {
          createBtn.style.backgroundColor = "green"
        }
        else {
          createBtn.style.backgroundColor = "red"
        }

        //empty fields
        document.querySelector('#new-character-form').reset()
      })
      .catch(err => console.log('You got an error!', err))
  });

});

