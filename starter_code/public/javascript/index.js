const charactersAPI = new APIHandler("http://localhost:8000/")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = () => {
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById('character-id').value;
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(id)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(e){
    e.preventDefault()
    let id = document.getElementById('edit-id').value;
    let name = document.getElementById('edit-name').value;
    let occupation = document.getElementById('edit-occ').value;
    let weapon = document.getElementById('edit-weap').value;
    let cartoon = document.getElementById('edit-cartoon').checked;    
    let updatedChar = {
      "name" : name,
      "occupation" : occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }  
    charactersAPI.updateOneRegister(id, updatedChar)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = document.getElementById('newname').value;
    let occupation = document.getElementById('newocc').value;
    let weapon = document.getElementById('newweap').value;
    let cartoon = document.getElementById('isCartoon').checked;
    let newChar = {
      "name" : name,
      "occupation" : occupation,
      "weapon" : weapon,
      "cartoon" : cartoon
    }
    charactersAPI.createOneRegister(newChar);
  }
})
