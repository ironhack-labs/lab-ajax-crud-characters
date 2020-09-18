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
 /*    .then(res => {
      console.log(res)
      
    })
    .catch(error => {
      console.log(error)
    }) */

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    /* .then(res => {
      console.log(`delete ${id}`)
    })
  
    .catch(error => {
      console.log(error)
    }) */
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    /* const newCharater = {
      name, 
      occupation, 
      weapon, 
      cartoon
    }

    .then(update => {
      console.log(udpate)
    })

    .catch(error => {
      console.log(error)
    })
 */

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    /* const newCharacter = {
      name, 
      occupation, 
      weapon, 
      cartoon
    }

    .then(update => {
      console.log(update)
    })

    .catch(error => {
      console.log(error)
    }) */

  });
