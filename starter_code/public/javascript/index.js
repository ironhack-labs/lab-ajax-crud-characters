const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    if ($("#character-id").val() != '' ) {
      let id = $("#character-id").val();
      charactersAPI.getOneRegister(id);
    }
   }
  
  document.getElementById('delete-one').onclick = function(){
    if ($("#character-id-delete").val() != '' ) {
      let id = $("#character-id-delete").val();
      charactersAPI.deleteOneRegister(id);
    }
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let editCharacter = {
      id: $("#editID").val(),
      name: $("#editName").val(),
      occupation:$("#editOccupation").val() ,
      weapon: $("#editWeapon").val(),
      cartoon: $("#editCartoon").val()
    }
    charactersAPI.updateOneRegister(editCharacter);  
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let newCharacter = {
      name: $("#newName").val(),
      occupation:$("#newOccupation").val() ,
      weapon: $("#newWeapon").val(),
      cartoon: $("#newCartoon").val()
    }
    charactersAPI.createOneRegister(newCharacter);
  }

  // - - - - - - - -  UPDATES DISPLAY  - - - - - - - -
  
})
