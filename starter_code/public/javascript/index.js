$(document).ready(() => {
  const charactersAPI = new APIHandler("http://localhost:8000");
  document.getElementById("fetch-all").onclick = function() {
    let container = document.getElementById("character");
    container.innerHTML = "";
    charactersAPI.getFullList().then(data => {
      data.forEach(e => {
        container.innerHTML += `<div class="character-info col-sm-4">
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
      });
    });
    document.getElementById('fetch-one').onclick = function(){
    
    }
    
    document.getElementById('delete-one').onclick = function(){
          
    }
    
    document.getElementById('edit-character-form').onsubmit = function(){
              
    }
    
    document.getElementById('new-character-form').onsubmit = function(){
                  
    }
  };
});