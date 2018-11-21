const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(1)

  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: "qwe", occupation: "string", cartoon: true, weapon: "string" 
    }
    charactersAPI.createOneRegister(characterInfo)     
  }
})
