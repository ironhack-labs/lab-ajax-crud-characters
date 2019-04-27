const charactersAPI = new APIHandler("http://localhost:8000")

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
    let getUpt = document.getElementsByClassName("update-char");
    let objNew = {
      id: document.getElementsByName('chr-id')[0].value,
      name: getUpt[0].value,
      occupation: getUpt[1].value,
      weapon: getUpt[2].value,
      cartoon: getUpt[3].checked
    } 
    charactersAPI.updateOneRegister(objNew);
  }
  
  document.getElementsByName('chr-id')[0].onchange = function() {
    let id = document.getElementsByName('chr-id')[0].value;
    charactersAPI.updateFields(id);
  }

  document.getElementById('new-character-form').onsubmit = function(){
    let getNew = document.getElementsByClassName("new-character");
    let objNew = {
      name: getNew[0].value,
      occupation: getNew[1].value,
      weapon: getNew[2].value,
      cartoon: getNew[3].checked
    } 
    charactersAPI.createOneRegister(objNew);
  }
})
