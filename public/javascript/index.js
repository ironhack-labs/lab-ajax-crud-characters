const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(response => {
      const characters = response.data
      console.log(characters)

      characters.forEach(character => {
      const characterInfo = `
        <div class="character-info">
        <div class="id">Id: <span>${character.id}</span></div>
        <div class="name">Character Name: <span>${character.name}</span></div>
        <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
        <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
        <div class="weapon">Character Weapon <span>${character.weapon}</span></div>
        </div>`

        document.querySelector(".characters-container").innerHTML += characterInfo

      })
    })

    .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.querySelector("[name=character-id]").value
    console.log(characterId)

    charactersAPI.getOneRegister(characterId)
    .then(response => {
      const character = response.data

      const characterInfo =`
      <div class="character-info">
      <div class="id">Id: <span>${character.id}</span></div>
      <div class="name">Character Name: <span>${character.name}</span></div>
      <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
      <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
      <div class="weapon">Character Weapon <span>${character.weapon}</span></div>
      </div>`

      document.querySelector(".characters-container").innerHTML = characterInfo
    })

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
})});