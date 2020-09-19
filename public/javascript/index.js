const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
    .then(res => {
      console.log(res)
      const data = res.data
      let str = ''
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
})
})


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()
    const getCharacter = document.getElementById('character-id').value
    
    charactersAPI.getOneRegister(getCharacter)
    .then(res => {
      console.log(res)
      const data = res.data
      let str = ''
      str+= `
      <div class = "character-info">
            <div class = "name">Character Name: ${data.name}</div>
            <div class = "occupation">Character Occupation: ${data.occupation}</div> 
            <div class = "cartoon">Is a Cartoon ? ${data.cartoon}</div>
            <div class = "weapon">Character Weapon: ${data.weapon}</div>
            </div>
      `
      document.getElementById('characters-container').innerHTML= str
    })
    .catch(error => {
      console.log(error)
    }) 
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    const deleteCharacter = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(deleteCharacter)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    }) 
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const getById = document.getElementById('chr-id').value
    const name = document.getElementById('name').value
    const occupation = document.getElementById('occupation').value
    const weapon = document.getElementById('weapon').value
    const cartoon = document.getElementById('cartoon').checked ? true : false

   /*  if (document.getElementById('cartoon').checked == false){
      cartoon = false
    } else {
      cartoon = true
    }  */

    const upCharacterInfo = {
      name,
      occupation,
      weapon, 
      cartoon
    }

    charactersAPI.updateOneRegister(getById,upCharacterInfo)
    .then(res => {
      console.log(res)

    })

    .catch(error => {
      console.log(error)
    })
 

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.getElementById('new-name').value
    const occupation = document.getElementById('new-occupation').value
    const weapon = document.getElementById('new-weapon').value
    const cartoon = document.getElementById('new-cartoon').checked ? true : false
    const newCharacter = {
      name, 
      occupation, 
      weapon, 
      cartoon
    }

    charactersAPI.createOneRegister(newCharacter)
      .then(update => {
        console.log(update)
      })
  
    .catch(error => {
      console.log(error)
    }) 
  }
  );
