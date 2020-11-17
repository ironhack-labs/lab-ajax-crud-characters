const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(response => {

            let allCharacters = response.data.slice(1, 5)
            let characterHtml = ''

            allCharacters.forEach(elm => {
              characterHtml += `<div class="character-info">
              <div> ${elm.name}</div>
              <div> ${elm.occupation}</div>
              <div> ${elm.cartoon}</div>
              <div> ${elm.weapon}</div>
              </div>`
            })
        
        document.querySelector('.characters-container').innerHTML = characterHtml

      })
      .catch(err => console.log('Hubo un error!', err))
  })


  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()
      
      
    const characterId  = document.querySelector('.operation input').value

    charactersAPI
      .getOneRegister(characterId)
      .then(response => {

        let allCharacters = [response.data]
        let characterHtml = ''
        
          allCharacters.forEach(elm => {
              characterHtml += `<div class="character-info">
              <div> ${elm.name}</div>
              <div> ${elm.occupation}</div>
              <div> ${elm.cartoon}</div>
              <div> ${elm.weapon}</div>
              </div>`
          })
        
        document.querySelector('.characters-container').innerHTML = characterHtml

      })
      .catch(err => console.log('Hubo un error!', err))

  })

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('.delete input').value

    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => {

        document.querySelector('#delete-one').style.backgroundColor = 'green'
      })

    .catch(document.querySelector('#delete-one')).style.backgroundColor = 'red'
  })


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    
    const inputs = document.querySelectorAll('#edit-character-form input')
    const  characterId = inputs[0].value

    const characterInfo = {
          id: inputs[0].value, 
          name: inputs[1].value,
          occupation: inputs[2].value,
          weapon: inputs[3].value,
          cartoon: inputs[4].checked,
      }
    

    charactersAPI
      .updateOneRegister(characterInfo, characterId)
      .then(() => {
        document.querySelector('#update-data').style.backgroundColor = 'green'
      })

      .catch(document.querySelector('#update-data')).style.backgroundColor = 'red'

  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {


  })
})
