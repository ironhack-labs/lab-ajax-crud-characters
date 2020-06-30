const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  
//TODOS LOS PERSONAJES

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    event.preventDefault()

    charactersAPI.getFullList()
      .then(response => { 
        response.data.forEach(elm => {
          let newCharacter = document.querySelector('.character-info').cloneNode(true)

          newCharacter.querySelector('.id').innerText = `Id: ${elm.id}`
          newCharacter.querySelector('.name').innerText = `Name: ${elm.name}`
          newCharacter.querySelector('.occupation').innerText = `Occupation: ${elm.occupation}`
          newCharacter.querySelector('.cartoon').innerText = `Is a Cartoon?: ${elm.cartoon}`
          newCharacter.querySelector('.weapon').innerText = `Weapon: ${elm.weapon}`
          const characterList = document.querySelector('.characters-container')
          characterList.appendChild(newCharacter)
        })
        
      })
      .catch(err => console.log('error', err))

  });

//BUSCAR POR ID
  
  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const inputID = document.querySelector('#search-character-id')
   
    charactersAPI.getOneRegister(inputID.value)
      .then(response => {
          let newCharacter = document.querySelector('.character-info').cloneNode(true)

          newCharacter.querySelector('.id').innerText = `Id: ${response.data.id}`
          newCharacter.querySelector('.name').innerText = `Name: ${response.data.name}`
          newCharacter.querySelector('.occupation').innerText = `Occupation: ${response.data.occupation}`
          newCharacter.querySelector('.cartoon').innerText = `Is a Cartoon?: ${response.data.cartoon}`
          newCharacter.querySelector('.weapon').innerText = `Weapon: ${response.data.weapon}`
          const characterList = document.querySelector('.characters-container')
          characterList.appendChild(newCharacter)
      })
      .catch(err => ('error', err))
  });

//ELIMINAR POR ID

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const idDelete = document.querySelector('#delete-character-id')

    charactersAPI.deleteOneRegister(idDelete.value)
      .then(response => document.querySelector('#delete-one').classList.toggle('btn-green'))
      .catch(err => document.querySelector('#delete-one').classList.toggle('btn-red'))
  
  });

//EDITAR CARACTER

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()
    
    const inputChange = document.querySelectorAll('#edit-character-form input')

    const newUpdate = {
  
      name: inputChange[1].value,
      occupation: inputChange[2].value,
      weapon: inputChange[3].value,
      cartoon: inputChange[4].value
    }

    const id = inputChange[0].value

    charactersAPI.updateOneRegister(id, newUpdate)
      .then(response => document.querySelector('#send-dat').classList.toggle('btn-green'))
      .catch(err => document.querySelector('#send-dat').classList.toggle('btn-red'))

  });

//CREAR 

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#new-character-form input')

    const character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].value
    }
    console.log(character)
    charactersAPI.createOneRegister(character)
      .then((newCharacter) => document.querySelector('#send-data').classList.toggle('btn-green'))
      .catch(err => document.querySelector('#send-data').classList.toggle('btn-red'))
    
  });
});
