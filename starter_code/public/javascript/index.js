const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  const getId = document.getElementById;
  getId('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(data => {
            document.getElementsByClassName("character-info")[0].innerHTML = "";
      
            data.forEach(e => {
              document.getElementsByClassName("character-info")[0].innerHTML += 
              `<div class="character-info">
                <div class="id">Character Id: ${e.id}</div>
                <div class="name">Name: ${e.name}</div>
                <div class="occupation">Occupation: ${e.occupation}</div>
                <div class="cartoon">Cartoon: ${e.cartoon}</div>
                <div class="weapon">Weapon: ${e.weapon}</div>
              </div>`;
            });
    });
  };

  
  getId('fetch-one').onclick = function(){
 
  }
  
  getId('delete-one').onclick = function(){
        
  }
  
  getId('edit-character-form').onsubmit = function(){
            
  }
  
  getId('new-character-form').onsubmit = function(){
                
  }
});
