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
    const mybichito = {
      name: document.getElementById("editname").value,
      occupation: document.getElementById('editoccupation').value,
      weapon: document.getElementById('editweapon').value,
      cartoon: document.getElementById('editcartoon').value
    }
    const selectId = +document.getElementById('editid').value

      charactersAPI.updateOneRegister(selectId,mybichito).then(()=>{})
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const mybichito = {
      name: document.getElementById("newname").value,
      occupation: document.getElementById('newoccupation').value,
      weapon: document.getElementById('newweapon').value,
      cartoon: document.getElementById('newcartoon').value
    }

    charactersAPI.createOneRegister(mybichito)
  }
})

// "input[name=character-id]"
