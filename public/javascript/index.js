const charactersAPI = new APIHandler('http://localhost:8000')


window.addEventListener('load', () => {




  // FETCH ALL
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    event.preventDefault()

    charactersAPI.getFullList()
      .then(res => {
        console.log('Char list', res)
        res.forEach(elm => {

          let newChar = document.querySelector('.character-info').cloneNode(true)
          const charContainer = document.querySelector('.characters-container')

          newChar.querySelector('.id').innerText = `Id: ${elm.id}`
          newChar.querySelector('.name').innerText = `Name: ${elm.name}`
          newChar.querySelector('.occupation').innerText = `Occupation: ${elm.occupation}`
          newChar.querySelector('.cartoon').innerText = `Is a Cartoon?: ${elm.cartoon}`
          newChar.querySelector('.weapon').innerText = `Weapon: ${elm.weapon}`

          charContainer.appendChild(newChar)
        })
      })





    // GET ELEMENT BY ID
    document.getElementById('fetch-one').addEventListener('click', function (event) {

      event.preventDefault()

      const id = document.querySelector('.fetchOne').value
      console.log(id)
      charactersAPI.getOneRegister(id)
        .then(res => {
          let newChar = document.querySelector('.character-info').cloneNode(true)

          newChar.querySelector('.id').innerText = `Id: ${res.data.id}`
          newChar.querySelector('.name').innerText = `Name: ${res.data.name}`
          newChar.querySelector('.occupation').innerText = `Occupation: ${res.data.occupation}`
          newChar.querySelector('.cartoon').innerText = `Is a Cartoon?: ${res.data.cartoon}`
          newChar.querySelector('.weapon').innerText = `Weapon: ${res.data.weapon}`
          const charContainer = document.querySelector('.characters-container')
          charContainer.appendChild(newChar)
        })
        .catch(err => ('error', err))
    })




    // DELETE ONE BY ID
    document.getElementById('delete-one').addEventListener('click', function (event) {
      event.preventDefault()
      const id = document.querySelector('.deleteOne').value
      console.log(id)
      charactersAPI.deleteOneRegister(id)
    })




    // EDIT ONE BY ID
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
        .then(res => document.querySelector('#send-edit').classList.toggle('btn-green'))
        .catch(err => document.querySelector('#send-edit').classList.toggle('btn-red'))

    })



    // CREATE NEW ONE
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
        .then(res => document.querySelector('#send-data').classList.toggle('btn-green'))
        .catch(err => document.querySelector('#send-data').classList.toggle('btn-red'))

    })
  })
})
