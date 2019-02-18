const charactersAPI = new APIHandler("http://localhost:8000");



$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
      charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementsByName('character-id')[0].value;

    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
        let id = document.getElementsByName('character-id-delete')[0].value;

        charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
      event.preventDefault();

       const id = document.getElementsByName('chr-id')[0].value;   
       
       const updatedCharacter = {
        name: document.getElementsByName('name')[1].value,
        occupation: document.getElementsByName('occupation')[1].value,
        weapon: document.getElementsByName('weapon')[1].value,
        cartoon: document.getElementsByName('cartoon')[1].checked,
      };
       
      charactersAPI.updateOneRegister(id, updatedCharacter);
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){
      event.preventDefault();    
      
      const characterInfo = {
        name: document.getElementsByName('name')[0].value,
        occupation: document.getElementsByName('occupation')[0].value,
        weapon: document.getElementsByName('weapon')[0].value,
        cartoon: document.getElementsByName('cartoon')[0].checked,
      };

      charactersAPI.createOneRegister(characterInfo);
      
  }
})
