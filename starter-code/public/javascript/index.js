const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function (e) {
    e.preventDefault()
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function (e) {
    const id = document.querySelector('#character-id').value
    let getOneCharacter = charactersAPI.getOneRegister(id).then(character => {
      console.log(character);
    })
  }

  document.getElementById('delete-one').onclick = function (e) {
    e.preventDefault()
    const deleteButton = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(deleteButton)
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault()
    const id = document.querySelector('#edit-id').value
    const name = document.querySelector('#edit-name').value
    const occupation = document.querySelector('#edit-occupation').value
    const weapon = document.querySelector('#edit-weapon').value
    const cartoon = document.querySelector('#edit-checkbox').checked


    const character = {
      name,
      occupation,
      weapon,
      cartoon
    }

    charactersAPI.updateOneRegister(id, character)
      .then(data => {
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    const name = document.querySelector('#create-name').value
    const occupation = document.querySelector('#create-occupation').value
    const weapon = document.querySelector('#create-weapon').value
    const cartoon = document.querySelector('#cartoon-checkbox').checked

    const character = {
      name,
      occupation,
      weapon,
      cartoon
    }
    charactersAPI.createOneRegister(character)
      .then(data => {
        console.log(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
})
