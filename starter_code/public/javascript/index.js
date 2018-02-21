const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(e){
    charactersAPI.getOneRegister(e)
    document.getElementById("character-id").value=null;
  }
  
  document.getElementById('delete-one').onclick = function(e){
    charactersAPI.deleteOneRegister(e)
    document.getElementById("character-id-delete").value=null;
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    charactersAPI.updateOneRegister(e)
    name: e.target.name.value=null;
    occupation: e.target.occupation.value=null;
    debt: e.target.debt.checked=false;
    weapon: e.target.weapon.value=null; 
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();   
    charactersAPI.createOneRegister(e)
    name: e.target.name.value=null;
    occupation: e.target.occupation.value=null;
    debt: e.target.debt.checked=false;
    weapon: e.target.weapon.value=null; 
  }
})
