const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.querySelector('.operation input[name="character-id"]').value
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.querySelector('.delete input[name="character-id-delete"]').value
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();

    let char = {
      id: document.querySelector("#edit-character-form input[name='chr-id']").value,
      name: document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value,
      occupation: document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value,
      weapon: document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value,
      cartoon: document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked
    }

    charactersAPI.updateOneRegister(char);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const character = {
      name: document.querySelector('#new-character-form input[name="name"]').value,
      occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form input[name="cartoon"]').checked
    }
    charactersAPI.createOneRegister(character);
  }
})
