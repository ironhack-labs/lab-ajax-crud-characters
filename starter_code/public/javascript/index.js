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
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const editChar = document.getElementById('edit-character-form');
    let info = {
      name: editChar.name.value,
      occupation: editChar.occupation.value,
      weapon: editChar.weapon.value,
      cartoon: editChar.cartoon.checked
    }
    charactersAPI.updateOneRegister(editChar.chrid.value, info);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const newChar = document.getElementById('new-character-form');    
    let info = {
      name: newChar.name.value,
      occupation: newChar.occupation.value,
      weapon: newChar.weapon.value,
      cartoon: newChar.cartoon.checked
    };
    charactersAPI.createOneRegister(info);
    charactersAPI.getFullList();
  }
})
