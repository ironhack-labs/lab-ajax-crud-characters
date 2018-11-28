const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()

  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById("newcard").value
    charactersAPI.getOneRegister(id)
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementById("deletecard").value
    charactersAPI.deleteOneRegister(id)
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    charactersAPI.updateOneRegister(e)
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault()
    
    
    charactersAPI.createOneRegister(e)
                
  }
})
