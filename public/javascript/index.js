const charactersAPI = new APIHandler('https://minions-api.herokuapp.com/characters');

window.addEventListener('load', () => {

  // Get all characters
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI
      .getFullList()
      .then(fullList => {

        const characterInfoContainer = document.querySelector('.character-info')
        characterInfoContainer.classList.toggle('display-none')

        const charactersContainer = document.querySelector('.characters-container')

        const fullListFilter = fullList.data.filter(element => element.weapon === 'tequeños')
        
        fullListFilter.forEach(element => {

          charactersContainer.innerHTML += `<div class="character-info">

            <div class="idCharacter">
                ID: 
                <span>${element.id}</span>
            </div>
            <div class="name">
                Character: 
                <span>${element.name}</spa>
            </div>
            <div class="occupation">
              Occupation:
              <span>${element.occupation}</span>
            </div>
            <div class="cartoon">
              Is a Cartoon?: 
              <span>${element.cartoon}</span>
            </div>
            <div class="weapon">
              Weapon: 
              <span>${element.weapon}</span>
            </div>

          </div>` 

        })

      })
      .catch(err => console.log('Ha ocurrido un error cargando la lista de personajes', err))
   
  });

  // Get one character
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const characterId = document.querySelector('#character-id').value

    charactersAPI
      .getOneRegister(characterId)
      .then(oneRegister => {

        const characterInfoContainer = document.querySelector('.character-info')
        characterInfoContainer.classList.toggle('display-none')

        const charactersContainer = document.querySelector('.characters-container')

        charactersContainer.innerHTML = `<div class="character-info">

            <div class="idCharacter">
                ID: 
                <span>${oneRegister.data.id}</span>
            </div>
            <div class="name">
                Character: 
                <span>${oneRegister.data.name}</spa>
            </div>
            <div class="occupation">
              Occupation:
              <span>${oneRegister.data.occupation}</span>
            </div>
            <div class="cartoon">
              Is a Cartoon?: 
              <span>${oneRegister.data.cartoon}</span>
            </div>
            <div class="weapon">
              Weapon: 
              <span>${oneRegister.data.weapon}</span>
            </div>

          </div>`

      }) 
      .catch(err => console.log('Ha ocurrido un error cargando al personaje', err))

  });

  // Delete one character
  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    const characterId = document.querySelector('#character-id-delete').value
    const deleteButton = document.querySelector('#delete-one')

    charactersAPI
      .deleteOneRegister(characterId)
      .then(response => {

        // Dará error si devuelve null poorque no existe el ID
        // O si se introdujo una letra
        if (!response.data || response.data.name === 'CastError') {

          deleteButton.classList.add('btn-wrong')

        } else {

          deleteButton.classList.add('btn-success')

        }
        
      })
      .catch(err => console.log('Ha ocurrido un error eliminando el personaje', err))
    
  });

  // Update character
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()

    const updateButton = document.querySelector('#edit-character-form button')
    const inputs = document.querySelectorAll("#edit-character-form input")
    const characterId = inputs[0].value
    
    const characterInfo = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(() => updateButton.classList.add('btn-success'))
      .catch(err => createButton.classList.add('btn-wrong'))
    
  });

  // Create character
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()

    const createButton = document.querySelector('#new-character-form button')
    const inputs = document.querySelectorAll('#new-character-form input')

    const newCharacter = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    const { name, occupation, weapon } = newCharacter

    if (!name && !occupation && !weapon ) {
      createButton.classList.add('btn-wrong')
      return
    }

    charactersAPI
      .createOneRegister(newCharacter)
      .then(() => {
        
        inputs.forEach(element => element.value = '')
        createButton.classList.add('btn-success')

      })
      .catch(() => createButton.classList.add('btn-wrong'))

  });
});
