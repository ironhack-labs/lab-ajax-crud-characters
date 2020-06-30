const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(response => {console.log(response.data)})
    .catch(err => console.log('error', err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    event.preventDefault()

    const inputID = document.querySelector('#search-character-id')
   
    charactersAPI.getOneRegister(inputID.value)
      .then(response => {console.log(response.data)})
      .catch(err => ('error', err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    event.preventDefault()

    const idDelete = document.querySelector('#delete-character-id')

    charactersAPI.deleteOneRegister(idDelete.value)
      .then(response => console.log(response.data))
      .catch(err => ('error', err))
  
  });

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
      .then(response => console.log(response.data))
      .catch(err => console.log('err', err))

  });

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
      .then((newCharacter) => console.log(newCharacter))
      .catch(err => console.log('err', err))
    
  });
});
