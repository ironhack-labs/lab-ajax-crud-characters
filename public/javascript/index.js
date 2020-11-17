const charactersAPI = new APIHandler()

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        let allChars = response.data
        let charHTML = ''

        allChars.forEach( elm => {
              charHTML += `<div class="character-info">
                          <div class="name">Character Name: ${elm.name}</div>
                          <div class="occupation">Character Occupation: ${elm.occupation}</div>
                          <div class="cartoon">Is a Cartoon?: ${elm.cartoon}</div>
                          <div class="weapon">Character Weapon: ${elm.weapon}</div>
                        </div>`
        })
        document.querySelector('character-container').innerHTML = charHTML
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    e.preventDefault()
    const charId = document.querySelector('#fetch-one input').value

    charactersAPI 
      .getOneRegister(charId)
      .then(response => {
        const inputs = document.querySelector('#fetch-one input')
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    e.preventDefault()

      const inputs = document.querySelectorAll('edit-character-form input')

      const charInfo = {
        name: inputs[1].value,
        occupation: inputs[2].value,
        weapon: inputs[3].value,
        cartoon: inputs[4].checked
      }
      const charID = inputs[0].value
      charactersAPI 
        .updateOneRegister(charID, charInfo)
        .then(() => alert('Personaje actualizado!'))
        .catch(err => console.log('Hubo un error en la modificación de un personaje, ', err))
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    e.preventDefault()

    const inputs = document.querySelectorAll('new-character-form input')

    const charInfo = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }
    charactersAPI 
      .createOneRegister
      .then(() => alert('Personaje creado!'))
      .catch(err => console.log('Hubo un error en la modificación de un personaje, ', err))
  });
