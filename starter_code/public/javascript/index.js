const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = $('input[name="character-id"]').val();
    charactersAPI.getOneRegister(id);
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = $('input[name="character-id-delete"]').val();
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
      e.preventDefault();
      let id = $('#edit-character-form input[name="chr-id"]').val();
      let name = $('#edit-character-form input[name="name"]').val()
      let occupation = $('#edit-character-form input[name="occupation"]').val();
      let weapon = $('#edit-character-form input[name="weapon"]').val();
      let debt = $('#edit-character-form input[name="cartoon"]').val();
      let data = {name, occupation, weapon, debt};
      charactersAPI.updateOneRegister(id, data);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
      e.preventDefault();
      let name = $('#new-character-form input[name="name"]').val()
      let occupation = $('#new-character-form input[name="occupation"]').val();
      let weapon = $('#new-character-form input[name="weapon"]').val();
      let debt = $('#new-character-form input[name="cartoon"]').val();
      let data = {name, occupation, weapon, debt};
      console.log(data);
      charactersAPI.createOneRegister(data);
  }
})
