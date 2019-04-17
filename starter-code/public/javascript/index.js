const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    document.querySelector(".characters-container").innerHTML = ""
    var todos = charactersAPI.getFullList();
    todos
      .then( todos =>{

        todos.forEach(element => {
          console.log(element)
          document.querySelector(".characters-container").innerHTML += 
          `<div class="character-info">
          <div class="name">${element.name}</div>
          <div class="occupation">${element.occupation}</div>
          <div class="cartoon">${element.cartoon}</div>
          <div class="weapon">${element.weapon}</div>
        </div>`
        })
      })
      .catch(err =>{
        return err;
      })

      
        
      
      
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var uno=charactersAPI.getFullList()
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
