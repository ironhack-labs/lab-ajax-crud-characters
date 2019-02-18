const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    // const characters = document.getElementById("fetch-all");       
    // getCharactersInfo(characters);
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    // $('character-id').keyup(function(e){
    //   let charId =  e.target.value;
    //   return charId
    // })
    const charId = $('input[name="character-id"]').val()
    charactersAPI.getOneRegister(charId)
    
  }
  
  document.getElementById('delete-one').onclick = function(){
    const charId = $('input[name="character-id-delete"]').val()
    charactersAPI.deleteOneRegister(charId)
        
  }
  
  document.getElementById('new-character-form').onsubmit = function(event){

    event.preventDefault();

    const newCharacter = {
      name: $('#new-character-form input[name="name"]').val(),
      occupation:  $('#new-character-form input[name="occupation"]').val(),
      weapon: $('#new-character-form input[name="weapon"]').val(),
      cartoon: $('#new-character-form input[name="cartoon"]').checked
   };
    
   charactersAPI.createOneRegister (newCharacter) ;
   
   
  }
  
  document.getElementById('edit-character-form').onsubmit = function(event){
    event.preventDefault();

    const charId = $('input[name="chr-id"]').val();

    const editCharacter = {
      name: $('#edit-character-form input[name="name"]').val(),
      occupation:  $('#edit-character-form input[name="occupation"]').val(),
      weapon: $('#edit-character-form input[name="weapon"]').val(),
      cartoon: $('#edit-character-form input[name="cartoon"]').checked
   };
    console.log(editCharacter)
   charactersAPI.updateOneRegister(charId, editCharacter);  
  }

})

