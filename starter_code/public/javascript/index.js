const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    .then(e => console.log(e.data));
  }
  
  document.getElementById('fetch-one').onclick = function(){
      const characterInfo = {
        name: "name",
        occupation: "occupation",
        weapon: "weapon",
        cartoon: "cartoon"
      };
      charactersAPI.getOneRegister(characterInfo);
    };
  })
  
  document.getElementById('delete-one').onclick = function(){
        //id.value
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }

