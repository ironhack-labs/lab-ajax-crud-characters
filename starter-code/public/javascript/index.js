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
    
    var idDel = document.getElementById("deleteId").value;
    
    charactersAPI. deleteOneRegister(idDel)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    var editId = document.getElementById("editId").value;
   
    charactersAPI.updateOneRegister(editId)   
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
   e.preventDefault()
    charactersAPI.createOneRegister ()      
  }
})
