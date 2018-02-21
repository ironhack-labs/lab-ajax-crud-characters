const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
      charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(e){
    charactersAPI.getOneRegister(e);
    document.getElementById("character-id").value=null;
    e.target.id.value=null;
  }
  
  document.getElementById('delete-one').onclick = function(e){
    charactersAPI.deleteOneRegister(e);
    document.getElementById("character-id-delete").value=null;
   
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    
    charactersAPI.updateOneRegister(e); 
    e.target.name.value=null;
    e.target.occupation.value=null;
    e.target.weapon.value=null;
    e.target.debt.checked=false;   
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersAPI.createOneRegister(e); 
   e.target.name.value=null;
     e.target.occupation.value=null;
     e.target.weapon.value=null;
     e.target.debt.checked=false;
    
     
  }
})
