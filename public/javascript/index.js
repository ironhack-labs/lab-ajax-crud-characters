const charactersAPI = new APIHandler();

// updateCharactersList()



window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
      .then(response => {
        let allCharacters = response.data.splice(0,10)
        let charactersHtml = ''

        let cartoon = ''
        response.data.cartoon === true ? cartoon = 'yes' : cartoon = 'no'

        allCharacters.forEach(elm => {
          charactersHtml += `<div class="character-info">
        <div class="name">Character Name: ${elm.name}</div>
        <div class="occupation">Character Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${elm.cartoon}</div>
        <div class="weapon">Character Weapon: ${elm.weapon}</div>
      </div>`
          
        })
        
        // console.log('La respuesta es', response)
        document.querySelector('.characters-container').innerHTML = charactersHtml
        document.querySelector('#fetch-all').className = 'green-button'
      })
      .catch(() => document.querySelector('#fetch-all').className = 'red-button')
    // .catch(err => console.log('ERROR!:', err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const characterIdValue = document.querySelector('.operation input').value
    // console.log(characterIdValue)
    charactersAPI
    .getOneRegister(characterIdValue)
      .then(response => {

        let cartoon = ''
        response.data.cartoon === true ? cartoon = 'yes' : cartoon = 'no'
        
        const characterHtml = ` <div class="name">Character Name: ${response.data.name}</div>
        <div class="occupation">Character Occupation: ${response.data.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${cartoon}</div>
        <div class="weapon">Character Weapon: ${response.data.weapon}</div>`
        document.querySelector(".character-info").innerHTML = characterHtml

       
// console.log(response)
       })

        // console.log('La respuesta es', response.data))
    .catch(err => console.log('ERROR!:', err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()
    const characterIdValue = document.querySelector('.operation-delete input').value
    console.log(characterIdValue)

    charactersAPI
      .deleteOneRegister(characterIdValue)
      .then(() => {
        document.querySelector('#delete-one').className = 'green-button'
        // console.log(response)
      })
      .catch(() => document.querySelector('#delete-one').className = 'red-button')
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    // document.querySelector('#getFoodInfoForm').onsubmit = e => {

    

    const characterIDvalue = document.querySelector('#edit-character-form input').value
    // console.log(characterIDvalue)

    charactersAPI
      .getOneRegister(characterIDvalue)
      .then(response => {
        // console.log(response)

        const inputs = document.querySelectorAll('#edit-character-form input')
        inputs[0].value = response.data.id
        inputs[1].value = response.data.name
        inputs[2].value = response.data.occupation
        inputs[3].value = response.data.weapon
        inputs[4].checked = response.data.cartoon
    })


    const inputs = document.querySelectorAll('#edit-character-form input')

    const characterInfo = {
        id: inputs[0].value,
        name: inputs[1].value,
        occupation: inputs[2].value,
        weapon: inputs[3].value,
        cartoon: inputs[4].checked        
    }
    console.log(inputs, characterInfo)
    
    charactersAPI
      .updateOneRegister(characterIDvalue, characterInfo)
      .then(() => {
        // console.log(response)
        
        document.querySelector('#send-data').className = 'green-button'
      })

    .catch(() => document.querySelector('#send-data').className = 'red-button')



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
      .then(() => {
        document.querySelector('#send-new-data').className = 'green-button'
        // console.log(response)
        document.querySelector('#new-character-form').reset()
      })
      .catch(() => document.querySelector('#send-new-data').className = 'red-button')
  });
});
