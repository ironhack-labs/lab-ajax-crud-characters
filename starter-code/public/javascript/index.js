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
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    //let name = document.querySelector('#new-character-form input[name="name"]').value
    //let occupation = document.querySelector('#new-character-form input[name="occupation"]').value
    //let weapon = document.querySelector('#new-character-form input[name="weapon"]').value
    //let cartoon = document.querySelector('#new-character-form input[name="cartoon"]').value
    

    const character = {
      name: document.querySelector('#new-character-form input[name="name"]').value,
      occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form input[name="cartoon"]').checked
    }
    console.log(character.cartoon)
    charactersAPI.createOneRegister(character);
  }
})
