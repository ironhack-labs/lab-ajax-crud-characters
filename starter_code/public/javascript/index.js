const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){    
    charactersAPI.getFullList()
    .then(result => {
      for (char of response){
        $(".characters-container").append(
          `<div class="character-info">
          <div class="name>${char.name}</div>"
          <div class="name>${char.occupation}</div>
          <div class="name>${char.debt}</div>
          <div class="name>${char.weapon}</div>
          </div>`
        )
      }
    });
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
