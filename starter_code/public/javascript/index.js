const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById('character-id').value;
      charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementById('character-id-delete').value;
      charactersAPI.deleteOneRegister(id);    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    const id = document.getElementById('chr-id').value;
    const characterInfo = {
      name: document.getElementById('edit-name').value,
      occupation: document.getElementById('edit-occupation').value,
      weapon: document.getElementById('edit-weapon').value,
      cartoon: document.getElementById('edit-cartoon').value,
    }
      charactersAPI.updateOneRegister(characterInfo, id);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: document.getElementById('new-name').value,
      occupation: document.getElementById('new-occupation').value,
      weapon: document.getElementById('new-weapon').value,
      cartoon: document.getElementById('new-cartoon').value,
    }
    charactersAPI.createOneRegister(characterInfo);            
  }
})