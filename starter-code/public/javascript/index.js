const charactersAPI = new APIHandler("http://localhost:8000")


$(document).ready( () => {
  document.getElementById('fetch-all').onclick = async function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('body > section:nth-child(1) > section > div:nth-child(2) > input[type="text"]').value;
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value;
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    let id = document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value;
    let name = document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value;
    let occupation = document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value;
    let weapon = document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value;
    let cartoon = document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').checked;
    let characterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };
    charactersAPI.updateOneRegister(id, characterInfo);
  }
  
  document.getElementById('send-data').onclick = function(event){
    event.preventDefault();
    let newCharacter = {
      name: document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value,
      occupation: document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value,
      weapon: document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value,
      cartoon: document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').checked
    }   
    charactersAPI.createOneRegister(newCharacter);        
  }
})
