const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {


  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI.getFullList()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

   event.preventDefault()

    const id = document.querySelector('#character-id').value

    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

   event.preventDefault()

    const idD = document.querySelector('#character-id-delete').value

    charactersAPI.deleteOneRegister(idD)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

   event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')

    const id = document.querySelector('#edit-character')
  
      const editCharacter = {

          name: inputs[1].value,
          occupation: inputs[2].value,
          weapon: inputs[3].value,
          cartoon: inputs[4].checked

      }

    charactersAPI.updateOneRegister(id,editCharacter)

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
      event.preventDefault()
  
      const inputs = document.querySelectorAll('#new-character-form input')
  
      const character = {
          name: inputs[0].value,
          occupation: inputs[1].value,
          weapon: inputs[2].value,
          cartoon: inputs[3].checked
      }

      charactersAPI.createOneRegister(character)
  
  });

});
