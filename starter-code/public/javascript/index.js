const charactersAPI = new APIHandler("http://localhost:8000/characters")

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister()
  }
  
  document.getElementById('delete-one').onclick = function(){
    const selectedId = document.querySelector("input[name=character-id-delete]").value
    charactersAPI.deleteOneRegister(selectedId)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
      charactersAPI.updateOneRegister()
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const mybichito = {
      name: document.getElementById("name").value,
      occupation: document.getElementById('occupation').value,
      weapon: document.getElementById('weapon').value,
      cartoon: document.getElementById('cartoon').value
    }

    charactersAPI.createOneRegister(mybichito)
  }
})

// "input[name=character-id]"
