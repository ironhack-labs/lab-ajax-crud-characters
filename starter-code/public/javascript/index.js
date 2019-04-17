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
          <div class="id">Id: ${element.id}</div>
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="cartoon">Cartoon: ${element.cartoon}</div>
          <div class="weapon">Weapon: ${element.weapon}</div>
        </div>`
        })
      })
      .catch(err =>{
        return err;
      })
  }
  
  document.getElementById('fetch-one').onclick = function(){
    document.querySelector(".characters-container").innerHTML = ""
    
    var uno = charactersAPI.getOneRegister()
    uno
      .then(uno =>{
        console.log(uno)
          document.querySelector(".characters-container").innerHTML = 
          `<div class="character-info">
          <div class="id">Id: ${uno.id}</div>
          <div class="name">Name: ${uno.name}</div>
          <div class="occupation">Occupation: ${uno.occupation}</div>
          <div class="cartoon">Cartoon: ${uno.cartoon}</div>
          <div class="weapon">Weapon: ${uno.weapon}</div>
        </div>`
        })
      .catch(err =>{
        return err;
      })
  }
  
  document.getElementById('delete-one').onclick = function(){ 
    var uno = charactersAPI.getOneRegister()
    uno
    .findByIdAndRemove(uno)
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
     
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
