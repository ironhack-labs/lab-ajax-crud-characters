const charactersAPI = new APIHandler("http://localhost:8000");


$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  }

  
  document.getElementById('fetch-all').onclick = function(){

  }
  
  
  document.getElementById('fetch-one').onclick = function () {
    let charId = document.getElementById('fetch-one-id').value;
    charactersAPI.getOneRegister(charId);
  }

  
  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault(); 
    let id = $("#edit-character-form .field input[name='chr-id']")[0].value;
    let name = $("#edit-character-form .field input[name='name']")[0].value;
    let occupation = $("#edit-character-form .field input[name='occupation']")[0].value;
    let weapon = $("#edit-character-form .field input[name='weapon']")[0].value;
    let cartoon = $("#edit-character-form .field input[name='cartoon']")[0].checked;

    let editCharacter = {id, name, occupation, weapon, cartoon}; 
    charactersAPI.updateOneRegister(editCharacter);
  }

  
  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault(); 
    let name = $("#new-character-form .field input[name='name']")[0].value;
    let occupation = $("#new-character-form .field input[name='occupation']")[0].value;
    let weapon = $("#new-character-form .field input[name='weapon']")[0].value;
    let cartoon = $("#new-character-form .field input[name='cartoon']")[0].checked;

    let newCharacter = {name, occupation, weapon, cartoon}; 
    charactersAPI.createOneRegister(newCharacter);
  }

  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    let newCharacter = {
      name: createName.value,
      occupation: createOccupation.value,
      weapon: createWeapon.value,
      cartoon: valueCartoon.checked
    }
    charactersAPI.createOneRegister(newCharacter,changeColorCreateBtn)
  }
})
