const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
      event.preventDefault();
      charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    event.preventDefault();
    var id = document.getElementsByName('character-id')[0].value;
    console.log(id)
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
      event.preventDefault();
      charactersAPI.deleteOneRegister();
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault(); 
    charactersAPI.updateOneRegister();   
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault(); 
    charactersAPI.createOneRegister();          
  }
})
