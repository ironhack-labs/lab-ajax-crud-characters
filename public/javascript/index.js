const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        console.log(response.data)
        let showCharacters = ""
        response.data.forEach(character => {
          console.log(character)
          showCharacters += `
          <div class="character-info">
          <div class="name">Character Name:${character.name}</div>
          <div class="occupation">Character Occupation:${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`
        })
        document.getElementById('characters-container').innerHTML = showCharacters
      })
      .catch(err => {
        console.log(err)
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const nameOfCharacter = document.getElementById('fetching-one')
    console.log(nameOfCharacter.value)
    charactersAPI.getOneRegister(nameOfCharacter.value)
      .then(response => {
        console.log(response.data)
        let showOnlyOneCharacter = ""
        showOnlyOneCharacter += `
      <div class="character-info">
          <div class="name">Character Name:${response.data.name}</div>
          <div class="occupation">Character Occupation:${response.data.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${response.data.cartoon}</div>
          <div class="weapon">Character Weapon: ${response.data.weapon}</div>
        </div>`
        document.getElementById('characters-container').innerHTML = showOnlyOneCharacter
      })
      .catch(err => {
        console.log(err)
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    let deleteOneCharacter = document.getElementById('deleting-this-one')
    console.log(deleteOneCharacter.value)
    charactersAPI.deleteOneRegister(deleteOneCharacter.value)
    .then(response => {
      console.log(response.data)

      document.getElementById('delete-one').style.backgroundColor = "green"
    })
    .catch(err => {
      document.getElementById('delete-one').style.backgroundColor = "red"
      console.log(err)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister()
  });
});
