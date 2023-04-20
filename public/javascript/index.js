const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        const characters = response.data

        characters.forEach(character => {
          const characterInfo = `
            <div class="characters-info">
            <div class="id">Id: ${character.id}</div>
            <div class="name">Character Name: <span>${character.name}</span></div>
            <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
            <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
            </div>
          `

          document.querySelector('.characters-container').innerHTML += characterInfo
        })
      })
      .catch(error => console.log(error))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('[name=character-id]').value 
    console.log(characterId)
    
    charactersAPI.getOneRegister(characterId)
      .then(response => {
        const character = response.data

        const characterInfo = `
          <div class="characters-info">
            <div class="id">Id: ${character.id}</div>
            <div class="name">Character Name: <span>${character.name}</span></div>
            <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span>${character.cartoon}</span></div>
            <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
          </div>
        `

        document.querySelector('.characters-container').innerHTML = characterInfo
      })
      .catch(error => console.log(error))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('[name=character-id-delete]').value 
    console.log(characterId)
  
    charactersAPI.deleteOneRegister(characterId)
      .then(() => {
        console.log('Character deleted')
        document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(() => {
        console.log('Error deleting character')
        document.getElementById('delete-one').style.backgroundColor = 'red'
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const characterId = document.querySelector('#edit-character-form [name="chr-id"]').value
    const name = document.querySelector('#edit-character-form [name="name"]').value
    const occupation = document.querySelector('#edit-character-form [name="occupation"]').value
    const weapon = document.querySelector('#edit-character-form [name="weapon"]').value
    const cartoon = document.querySelector('#edit-character-form [name="cartoon"]').checked
    const character = { name, occupation, weapon, cartoon }
  
    charactersAPI.updateOneRegister(characterId, character)
      .then(response => {
        console.log(response.data)
        document.getElementById('edit-data').style.backgroundColor = 'green'
      })
      .catch(error => {
        console.log(error)
        document.getElementById('edit-data').style.backgroundColor = 'red'
      })
  });
})
