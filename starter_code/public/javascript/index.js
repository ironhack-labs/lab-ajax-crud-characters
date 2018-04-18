const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {


  showCharacter = function(character) {
    const newCharacterHtml = `
        <div class="character-info" id="character-info">
        <div class="id">${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon}</div>
        <div class="weapon">${character.weapon}</div>
      </div>
 `;
    document.getElementById("character-container").innerHTML += newCharacterHtml;
};

  document.getElementById('fetch-all').onclick = function(){

    charactersAPI.getFullList()
    .then((data)=> {
    document.getElementById("character-container").innerHTML = '';
    data.forEach(e => {
        showCharacter(e);
      })
    })
   

  }


  
  
  document.getElementById('fetch-one').onclick = function(){
    
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
