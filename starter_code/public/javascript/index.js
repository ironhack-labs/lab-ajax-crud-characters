const charactersAPI = new APIHandler("http://localhost:8000/")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    if (document.getElementsByName("character-id")[0].value!=""){
      charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value);
    }
  }
  
  document.getElementById('delete-one').onclick = function(){
    if (document.getElementsByName("character-id-delete")[0].value!=""){
      console.log(document.getElementsByName("character-id-delete")[0].value)
      charactersAPI.deleteOneRegister(document.getElementsByName("character-id-delete")[0].value);
    }    
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const updatedCharacter = {
      name: document.getElementsByName("name")[1].value,
      occupation: document.getElementsByName("occupation")[1].value,
      debt: document.getElementsByName("debt")[1].checked,
      weapon: document.getElementsByName("weapon")[1].value
    };
    charactersAPI.updateOneRegister(document.getElementsByName("chr-id")[0].value, updatedCharacter)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    const character = {
      name: document.getElementsByName("name")[0].value,
      occupation: document.getElementsByName("occupation")[0].value,
      debt: document.getElementsByName("debt")[0].checked,
      weapon: document.getElementsByName("weapon")[0].value
    };
    charactersAPI.createOneRegister(character);
  }
})