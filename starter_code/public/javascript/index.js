const charactersAPI = new APIHandler("http://localhost:8000")
console.log(charactersAPI)
$(document).ready( () => {

  let char_cont = document.getElementById ("char-cont");

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(data =>{
      char_cont.innerHTML="";
      data.forEach(element => {
        containerCharacter.innerHTML += `<div class="character-info">
        <div class="id">Character Id: ${e.id}</div>
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
      });
    })
    console.log("fetch all")
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister()
    console.log("get one")
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
