const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
      let requestedId = document.getElementsByName('character-id')[0].value;
      charactersAPI.getOneRegister(requestedId);
  }
  
  document.getElementById('delete-one').onclick = function(){
      let requestedId = document.getElementsByName('character-id-delete')[0].value;
      charactersAPI.deleteOneRegister(requestedId);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
