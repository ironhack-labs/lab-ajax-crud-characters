const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  event.preventDefault()

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(id)
  })

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(id)
  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    const id = document.querySelector('input[name="chr-id"]').value
    const inputs = document.querySelectorAll('#edit-character-form input')

    const newData = {
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }
    charactersAPI.updateOneRegister(newData, id)
  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    const inputs = document.querySelectorAll('#new-character-form input')

    const character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }
    console.log(character)
    charactersAPI.createOneRegister(character)
  })
})