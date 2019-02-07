
  const charactersAPI = new APIHandler("http://localhost:3100/characters")




$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){

    charactersAPI.getFullList()

  }
  
  document.getElementById('fetch-one').onclick = function(){
    
    charactersAPI.getOneRegister()

  }
  
  document.getElementById('delete-one').onclick = function(){

    charactersAPI.deleteOneRegister()
        
  }
  
  document.getElementById('senddata').onclick = function(){

    charactersAPI.updateOneRegister()
            
  }
  
  document.getElementById('new-character-form').onclick = function(){

    charactersAPI.createOneRegister()
                
  }
})
