const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var char_id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(char_id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    var char_id = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(char_id);    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    var valor = document.getElementById('chr_id').value;
    //console.log(valor);
    var characterInfo = {
      name: name_y.value,
      occupation: occupation_y.value,
      weapon: weapon_y.value,
      cartoon: cartoon_y.value
    };     
    //console.log(valor, characterInfo);
    charactersAPI.updateOneRegister(valor, characterInfo);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    var characterInfo = {
      id: chr_id.value,
      name: name_x.value,
      occupation: occupation.value,
      weapon: weapon.value,
      cartoon: cartoon.value
    };
    charactersAPI.createOneRegister(characterInfo);
  }
})
