const charactersAPI = new APIHandler('http://localhost:8000')


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.getFullList()
      .then(res => {
        console.log('Char list', res.data)
      })

    document.getElementById('fetch-one').addEventListener('click', function (event) {
      event.preventDefault()
      const id = document.querySelector('.fetchOne').value
      console.log(id)
      charactersAPI.getOneRegister(id)
    })

    document.getElementById('delete-one').addEventListener('click', function (event) {
      event.preventDefault()
      const id = document.querySelector('.deleteOne').value
      console.log(id)
      charactersAPI.deleteOneRegister(id)
    })

    document.getElementById('edit-character-form').addEventListener('submit', function (event) {
      event.preventDefault()

      const id = document.querySelector('.updateOne').value
      const input = document.querySelectorAll('#edit-character-form input')
      const newChar = {
        name: input[1].value,
        occupation: input[2].value,
        weapon: input[3].value,
        cartoon: input[4].checked
      }
      charactersAPI.updateOneRegister(id, newChar)

    })

    document.getElementById('new-character-form').addEventListener('submit', function (event) {
      event.preventDefault()

      const input = document.querySelectorAll('#new-character-form input')
      const newChar = {
        name: input[0].value,
        occupation: input[1].value,
        weapon: input[2].value,
        cartoon: input[3].checked
      }
      charactersAPI.createOneRegister(newChar)


    })
  })
})
