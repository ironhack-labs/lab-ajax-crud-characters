const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charId = document.getElementsByName('character-id')[0].value;
    charactersAPI.getOneRegister(charId);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let charId = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(charId);
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
