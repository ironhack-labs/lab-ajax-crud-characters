const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
      let requestedId = document.getElementsByName('character-id')[0].value;
      charactersAPI.getOneRegister(requestedId);
  }
  
  document.getElementById('delete-one').onclick = function(){
      let requestedId = document.getElementsByName('character-id-delete')[0].value;
      charactersAPI.deleteOneRegister(requestedId);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let editId = document.querySelector('#edit-character-form > div:nth-child(1) > input[type="text"]').value;
    let editName = document.querySelector('#edit-character-form > div:nth-child(2) > input[type="text"]').value;
    let editOcc = document.querySelector('#edit-character-form > div:nth-child(3) > input[type="text"]').value;
    let editWep = document.querySelector('#edit-character-form > div:nth-child(4) > input[type="text"]').value;
    let editChkBox = document.querySelector('#edit-character-form > div:nth-child(5) > input[type="checkbox"]').checked;

    charactersAPI.updateOneRegister(editId, editName, editOcc, editWep, editChkBox);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){

    let editName = document.querySelector('#new-character-form > div:nth-child(1) > input[type="text"]').value;
    let editOcc = document.querySelector('#new-character-form > div:nth-child(2) > input[type="text"]').value;
    let editWep = document.querySelector('#new-character-form > div:nth-child(3) > input[type="text"]').value;
    let editChkBox = document.querySelector('#new-character-form > div:nth-child(4) > input[type="checkbox"]').checked;

    charactersAPI.createOneRegister(editName, editOcc, editWep, editChkBox);
  }
})
