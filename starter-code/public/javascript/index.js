const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    
    apihandler.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
          const character = {
            name: newCharacterInputs[0].value,
            occupation: newCharacterInputs[1].value,
            weapon: newCharacterInputs[2].value
          }
          const listPoint = `<li>Personaje ${name} con ID ${id} (trabaja como ${occupation})</li>`
          document.getElementById('characters-list').innerHTML += listPoint

          newCharacterInputs.forEach(input => input.value = "")
  }
})
