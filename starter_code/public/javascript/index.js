const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(res => {});
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('fetchone').value;
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  };
});
