const charactersAPI = new APIHandler("https://minions-api.herokuapp.com/characters")
const newCharacterInputs = document.querySelectorAll('#new-character-form input')
const editCharacterInputs = document.querySelectorAll('#edit-character-form input')

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  document.getElementById('clear').onclick = function(){
    charactersAPI.clearAll()    
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const searchCharacterID = document.getElementById('search-id').value
    charactersAPI.getOneRegister(searchCharacterID)
  }
  
  document.getElementById('delete-one').onclick = function(){
    const deleteCharacterID = document.getElementById('delete-id').value
    charactersAPI.deleteOneRegister(deleteCharacterID)
  }
  
  document.getElementById('edit-character-form').onsubmit = e => {
    e.preventDefault()

    const updatedCharacter = {
      id: editCharacterInputs[0].value,
      name: editCharacterInputs[1].value,
      occupation: editCharacterInputs[2].value,
      weapon: editCharacterInputs[3].value,
      cartoon: editCharacterInputs[3].checked
    }
    charactersAPI.updateOneRegister(updatedCharacter)
         
  }
  
  document.getElementById('new-character-form').onsubmit = e => {
    e.preventDefault()
    const character = {
        name: newCharacterInputs[0].value,
        occupation: newCharacterInputs[1].value,
        weapon: newCharacterInputs[2].value,
        cartoon: newCharacterInputs[3].checked
    }
    charactersAPI.createOneRegister(character)   
  }
})
