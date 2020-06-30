const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    event.preventDefault()

    charactersAPI.getFullList()

      .then(fullList => {

        const boxCharacter = document.querySelector('.characters-container')

        boxCharacter.innerHTML = ""
        
        fullList.forEach(elm => {

        boxCharacter.innerHTML += `<div class="character-info">
        <div class="name">Character Name:${elm.name}</div>
        <div class="occupation">Character Occupation: ${elm.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${elm.cartoon}</div>
        <div class="weapon">Character Weapon: ${elm.weapon}</div>
      </div>`

        })
      
      })

      .catch(err => console.log("Hay un error", err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const id = document.querySelector('.operation input').value

    charactersAPI.getOneRegister(id)

      .then( oneRegister => {

        const boxCharacter = document.querySelector('.characters-container')

        boxCharacter.innerHTML = ""

        boxCharacter.innerHTML += `<div class="character-info">
        <div class="name">Character Name:${oneRegister.name}</div>
        <div class="occupation">Character Occupation: ${oneRegister.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneRegister.cartoon}</div>
        <div class="weapon">Character Weapon: ${oneRegister.weapon}</div>
      </div>`
      
      })

      .catch(err => console.log("Hay un error", err))


  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const id = document.querySelector('.operation.delete input').value
    
    charactersAPI.deleteOneRegister(id)


    document.querySelector('.operation.delete input').value = ""

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    charactersAPI.updateOneRegister()
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    charactersAPI.createOneRegister()
  });
});
