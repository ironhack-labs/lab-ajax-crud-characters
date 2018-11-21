const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }

  document.getElementById('fetch-one').onclick = function(){
    var id = document.getElementById("characterId").value;
    
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI. deleteOneRegister()
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    charactersAPI.updateOneRegister()   
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
   e.preventDefault()
    charactersAPI.createOneRegister ()      
  }
})
