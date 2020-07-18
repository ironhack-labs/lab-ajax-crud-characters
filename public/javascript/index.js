const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id")
    charactersAPI.getOneRegister(id[0].value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.getElementsByName("character-id-delete")
    charactersAPI.deleteOneRegister(id[0].value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = document.querySelectorAll('#edit-character-form input')
    const id = formData[0].value
    const name = formData[1].value
    const occupation = formData[2].value
    const weapon = formData[3].value
    const cartoon = formData[4].checked

    const objectForm = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }

    charactersAPI.updateOneRegister(objectForm)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = document.querySelectorAll('#new-character-form input')

    const name = formData[0].value
    const occupation = formData[1].value
    const weapon = formData[2].value
    const cartoon = formData[3].checked

    const objectForm = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }

    charactersAPI.createOneRegister(objectForm)
  });
});
