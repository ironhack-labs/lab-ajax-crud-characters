const charactersAPI = new APIHandler('https://minions-api.herokuapp.com')

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(result => {
        let text = ''
        result.data.forEach(elm => {
          
          
          text += `
          <div  class="character-info">
          <div class="name">Character Name: ${elm.name} </div>
          <div class="occupation">Character Occupation: ${elm.occupation}</div>
          <div class="cartoon">Is a Cartoon: ${elm.cartoon}</div>
          <div class="weapon">Character Weapon ${elm.weapon}</div>
          </div>
          `
          
        })
        document.querySelector('#all').innerHTML = text
      })
        .catch(err => console.log(err))
      });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.getElementsByName("character-id")[0].value

    charactersAPI
      .getOneRegister(characterId)
      .then((result) => { 

        const inputs = document.querySelectorAll('#edit-character-form input')
        if(result.data === null)
          inputs[0].value = 'CHARACTER NOT FOUND'
        else {
          inputs[0].value = result.data.id
          inputs[1].value = result.data.name
          inputs[2].value = result.data.occupation
          inputs[3].value = result.data.weapon
          
        }

        let text = ''
        if (!result.data)
          text = `USER NOT FOUND, RETRY!`
        else {
          text += `
        <div  class="character-info">
        <div class="name">Character Name: ${result.data.name} </div>
        <div class="occupation">Character Occupation: ${result.data.occupation}</div>
        <div class="cartoon">Is a Cartoon: ${result.data.cartoon}</div>
        <div class="weapon">Character Weapon ${result.data.weapon}</div>
        </div>
        `
        }
        document.querySelector('#all').innerHTML = text
      })
      .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.getElementsByName("character-id-delete")[0].value
    charactersAPI
      .deleteOneRegister(characterId)
      .then((result) => {
        if (result)
          document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(() => document.getElementById('delete-one').style.backgroundColor = 'red')
  });

  document.getElementById('edit-character-form').onsubmit = e => {
    e.preventDefault()

    const characterId = document.getElementsByName("chr-id")[0].value
    const inputs = document.querySelectorAll('#edit-character-form input')

    if (inputs[4].value === 'on')
      inputs[4].value = true
    else
      inputs[4].value = false
    
    const characterInfo = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].value
    }
    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then((myCharacter) => {
        document.getElementById('send-data').style.backgroundColor = 'green'
        document.querySelector('#new-character-form').reset()
      })
      .catch(err => document.getElementById('send-data').style.backgroundColor = 'red')
    }

  document.getElementById('new-character-form').onsubmit = e => {
    e.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    if (inputs[3].value === 'on')
      inputs[3].value = true
    else
      inputs[3].value = false
    const myCharacter = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].value
    }
    charactersAPI
      .createOneRegister(myCharacter)
      .then((myCharacter) => {
            document.getElementById('send-data').style.backgroundColor = 'green'
            document.querySelector('#new-character-form').reset()
        })
      .catch(err => document.getElementById('send-data').style.backgroundColor = 'red')
    }
})
