const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(response => {
        console.log(response)
        const data = response.data
        let str = ' '
        data.forEach(character => {
          str += `
            <div class = "character-info">
            <div class = "name">Character Name: ${character.name}</div>
            <div class = "occupation">Character Occupation: ${character.occupation}</div> 
            <div class = "cartoon">Is a Cartoon ? ${character.cartoon}</div>
            <div class = "weapon">Character Weapon: ${character.weapon}</div>
            </div>`
        })
         document.getElementById('characters-container').innerHTML= str
      })
      .catch(error => {
        console.log(error)
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const idInput = document.getElementById('character-id').value
    console.log(idInput)
    charactersAPI.getOneRegister(idInput)
      .then(response => {
        console.log(response)
        const data = response.data
        let str = ' '
        str += `
          <div class = "character-info">
          <div class = "name">Character Name: ${data.name}</div>
          <div class = "occupation">Character Occupation: ${data.occupation}</div>
          <div class = "cartoon">Is a Cartoon ? ${data.cartoon}</div>
          <div class = "weapon">Character Weapon : ${data.weapon}</div>
          </div>`
        document.getElementById('characters-container').innerHTML = str
      })
      .catch(error => {
        console.log(error)
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const idInput = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(idInput)
      .then(response => {
        console.log(response)
        document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(error => {
        console.log(error)
        document.getElementById('delete-one').style.backgroundColor = 'red'
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('updated-name').value
    const occupation = document.getElementById('updated-occupation').value
    const weapon = document.getElementById('updated-weapon').value
    let cartoon
    document.getElementById('updated-cartoon').checked
      ? (cartoon = true)
      : (cartoon = false)
    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    }
    const idInput = document.getElementById('chr-id').value
    charactersAPI.updateOneRegister(idInput, updatedCharacter)
      .then(response => {
        console.log(response)
        document.getElementById('update-data').style.backgroundColor = 'green'
      })
      .catch(error => {
        console.log(error)
        document.getElementById('update-data').style.backgroundColor = 'red'
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('name').value
    const occupation = document.getElementById('occupation').value
    const weapon = document.getElementById('weapon').value
    let cartoon
    document.getElementById('cartoon').checked
      ? (cartoon = true)
      : (cartoon = false)
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    }
    if(newCharacter.name)
      charactersAPI.createOneRegister(newCharacter)
        .then(response => {
          console.log(response)
          document.getElementById('send-data').style.backgroundColor = 'green'
        })
        .catch(error => {
          console.log(error)
          document.getElementById('send-data').style.backgroundColor = 'red'
        })
  });
});