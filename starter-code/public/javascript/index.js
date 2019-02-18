const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    // const characters = document.getElementById("fetch-all").value;       
    // getCharactersInfo(characters);
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    // $('character-id').keyup(function(e){
    //   let charId =  e.target.value;
    //   return charId
    // })
    let charId = $('input[name="character-id"]').val()
    charactersAPI.getOneRegister(charId)
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    let charId = $('input[name="character-id-delete"]').val()
    charactersAPI.deleteOneRegister(charId)
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    createOneRegister () ;   
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
      
  }
})


