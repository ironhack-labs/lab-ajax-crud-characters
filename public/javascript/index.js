const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    
    charactersAPI.getFullList()

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementById('search-id').value

    event.preventDefault()

    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    const id = document.querySelector('.delete input').value
    
    event.preventDefault()

    charactersAPI.getOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    
    const id = document.querySelector('input[name="chr-id"]').value
    const charInfo = document.querySelectorAll('#edit-character-form input')

    const newData = {
      id: charInfo[0].value,
      name: charInfo[1].value,
      occupation: charInfo[2].value,
      iweapon: charInfo[3].value,
      cartoon: charInfo[4].checked,
    }

    event.preventDefault()

    charactersAPI.updateOneRegister(id, obj)

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    const charInfo = document.querySelectorAll('#new-character-form input')

    const newCharacter = {
    
      name: charInfo[0].value,
      occupation: charInfo[1].value,
      iweapon: charInfo[2].value,
      cartoon: charInfo[3].checked,
    }

    charactersAPI.createOneRegister(obj)

  });
});
