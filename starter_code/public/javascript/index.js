const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
    
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charId = document.getElementById("fetch-id").value;
  
    charactersAPI.getOneRegister(charId);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let charId = document.getElementById("did").value;
    
    charactersAPI.deleteOneRegister(charId);  
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    let charId = document.getElementById("cid").value;
    let name = document.getElementById("aname").value;
    let occupation = document.getElementById("aoccupation").value;
    let cartoon = document.getElementById("acartoon").value;
    let weapon = document.getElementById("aweapon").value;
    
    let newChrt = { 
      name: name, 
      occupation: occupation, 
      cartoon: cartoon, 
      weapon: weapon };

      charactersAPI.updateOneRegister(newChrt, charId);
    
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();

    let name = document.getElementById("cname").value;
    let occupation = document.getElementById("coccupation").value;
    let cartoon = document.getElementById("ccartoon").value;
    let weapon = document.getElementById("cweapon").value;
    
    let newChrt = { 
      name: name, 
      occupation: occupation, 
      cartoon: cartoon, 
      weapon: weapon };
      
     
    charactersAPI.createOneRegister(newChrt);
  }
})
