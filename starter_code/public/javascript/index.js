const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById("character-id").value;

    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementById("character-id").value;

    charactersAPI.deleteOneRegister();
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const id = document.getElementById("character-id").value;
    
    charactersAPI.updateOneRegister();
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: document.getElementById("the-name-input").value,
      occupation: document.getElementById("the-occupation-input").value,
      weapon: document.getElementById("the-weapon-input").value
    };

    charactersAPI.createOneRegister();
  }
})
