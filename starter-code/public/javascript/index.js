const charactersAPI = new APIHandler("http://localhost:8000/")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

  }
  
  document.getElementById('fetch-one').onclick = function(){
    const selectedId = +document.querySelector("input[name=character-id]").value

    charactersAPI.getOneRegister(selectedId)
  }
  
  document.getElementById('delete-one').onclick = function(){
    const selectedId = +document.querySelector("input[name=character-id-delete]").value

    charactersAPI.deleteOneRegister(selectedId)
   /*  console.log(selectedId) */
    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
   /*  let controlID = {
      id: +document.querySelector("input[name=chr-id]").value,
      }
      console.log(controlID.id)

    let editCharacter = {
      name: document.querySelector("input[name=name]").value,
      occupation: document.querySelector("input[name=occupation]").value,
      weapon: document.querySelector("input[name=weapon]").value,
      cartoon: document.querySelector("input[name=cartoon]").checked
    }
    console.log(document.querySelector("input[name=name]").value)
    console.log(editCharacter)

    charactersAPI.updateOneRegister(controlID, editCharacter) */
    document.getElementById('edit-character-form').onsubmit = function () {
      let updateID = document.getElementById("updateID").value
      let editName = document.getElementById("editName").value
      let editOccupation = document.getElementById("editOccupation").value
      let editWeapon = document.getElementById("editWeapon").value
      let editCartoon = document.getElementById("editCartoon").value
   
      let editCharacter = {
        name: editName,
        occupation: editOccupation,
        weapon: editWeapon,
        cartoon: editCartoon
      }
      charactersAPI.updateOneRegister(updateID, editCharacter)
        .then((character) => console.log(character))
        .catch(error => console.log(error))
    }
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let newCharacter = {
      name: document.querySelector("input[name=name]").value,
      occupation: document.querySelector("input[name=occupation]").value,
      weapon: document.querySelector("input[name=weapon]").value,
      cartoon: document.querySelector("input[name=cartoon]").checked
    }
   /*  console.log(newCharacter) */

    charactersAPI.createOneRegister(newCharacter)
  }
})
