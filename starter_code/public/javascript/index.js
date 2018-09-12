const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready( () => {

  document.getElementById('fetch-all').onclick = async function(){
      let result = await charactersAPI.getAllCharacters();
      result = result.data;

      let characters = result.map( ch => {
        return `<div class="char-info">
                <div class="id"><span>ID:</span> <span>${ch.id}</span></div>
                <div class="name"><span>NAME:</span> <span>${ch.name}</span></div>
                <div class="occupation"><span>OCCUPATION:</span> <span>${ch.occupation}</span></div>
                <div class="cartoon"><span>CARTOON:</span> <span>${ch.cartoon}</span></div>
                <div class="weapon"><span>WEAPON:</span> <span>${ch.weapon}</span></div>
              </div>`;
      });
      let div = document.createElement('div');
      div.classList.add("wrapper");

      for(let char of characters) {
        div.innerHTML += char;
      }
      const $charSection = $(".characters");
      $charSection.html(div);




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
