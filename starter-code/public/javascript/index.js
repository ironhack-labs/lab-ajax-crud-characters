
//.ready para indicar que estás con jquery
const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    const characterId = document.getElementById('character-id').value
    charactersAPI.getOneRegister(characterId)
  }

  document.getElementById('delete-one').onclick = function () {
    var deleteId = $('#character-id-delete').val()
    charactersAPI.deleteOneRegister(deleteId)
  }

  document.getElementById('edit-character-form').onsubmit = function () {
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault()
    newCharacter = {
      id: e.target.id.value,
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      weapon: e.target.weapon.value,
      cartoon: e.target.cartoon.value
    }
    charactersAPI.createOneRegister(newCharacter)

    e.target.id.value = ''
    e.target.name.value = ''
    e.target.occupation.value = ''
    e.target.weapon.value = ''
    e.target.cartoon.value = ''
  }
})