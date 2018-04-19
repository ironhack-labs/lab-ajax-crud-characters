const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {

  
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function () {
    charactersAPI.getOneRegister()
  }

  document.getElementById('delete-one').onclick = function () {
    charactersAPI.deleteOneRegister()
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    charactersAPI.updateOneRegister()
  }

  document.getElementById('new-character-form').onsubmit = function () {
    let name = document.getElementById("name-id").value
    let occupation = document.getElementById("occupation-id").value
    let weapon = document.getElementById("weapon-id").value
    let cartoon = document.getElementById("cartoon-id").value

    let newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    
    charactersAPI.createOneRegister(newCharacter)


  }
})
