const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id= document.querySelector('#theInput').value;
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
        const deleteId = document.querySelector('body > section:nth-child(1) > section > div.operation.delete > input[type="text"]').value;
        charactersAPI.deleteOneRegister(deleteId)

  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    
    const editCharacterInfo = {
      id: document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value,
      name: document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value,
      occupation: document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value,
      weapon: document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value,
      cartoon: document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').value
    }

    charactersAPI.updateOneRegister(editCharacterInfo);
          
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const characterInfo = {
      name: document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value,
      occupation:document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value,
      weapon: document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value,
      cartoon:document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').value
    }
    charactersAPI.createOneRegister(characterInfo);      
  }
})
