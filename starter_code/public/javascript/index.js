const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value);
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault();
    const characterInfo = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      debt: document.getElementsByName("debt")[1].checked,
      weapon: document.getElementsByName("weapon")[1].value
    };
    var id = document.getElementsByName("chr-id")[0].value
    charactersAPI.updateOneRegister(id, characterInfo);
  }
  
  document.getElementById('new-character-form').onsubmit = function(e){
    e.preventDefault();
    const characterInfo = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      debt: document.getElementsByName("debt")[0].checked,
      weapon: document.getElementsByName("weapon")[0].value
    };
    charactersAPI.createOneRegister(characterInfo);
  }
})
