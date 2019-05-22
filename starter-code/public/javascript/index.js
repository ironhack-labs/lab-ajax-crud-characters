const charactersAPI = new APIHandler("https://minions-api.herokuapp.com")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = () => {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = () => {
    const id = document.getElementById('character-id').value
    console.log(id)
    charactersAPI.getOneRegister(id)
  }

  document.getElementById('delete-one').onclick = () => {
    const id = document.getElementById('character-id-delete').value
    console.log(id)

    charactersAPI.deleteOneRegister(id)
  }

  document.getElementById('edit-character-form').onsubmit = () => {
    e.preventDefault()

    const characterData = document.querySelectorAll('#edit-character-form input')
    console.log(characterData)
    const name = characterData[0].value
    const occupation = characterData[1].value
    const weapon = characterData[2].value
    const cartoon = characterData[3].checked

    console.log(cartoon)
    charactersAPI.updateOneRegister(name, occupation, weapon, cartoon)
  }

  document.getElementById('new-character-form').onsubmit = e => {
    e.preventDefault()
    const characterData = document.querySelectorAll('#new-character-form input')
    console.log(characterData)
    const name = characterData[0].value
    const occupation = characterData[1].value
    const weapon = characterData[2].value
    const cartoon = characterData[3].checked

    console.log(cartoon)
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)

  }
})