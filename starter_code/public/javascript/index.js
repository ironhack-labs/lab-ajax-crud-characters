const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
  charactersAPI.getFullList()
  .then( res => {
    console.log(res)
    })
}
  
  document.getElementById('fetch-one').onclick = function(){
    let id = document.getElementById("fetch-onee").value
    charactersAPI.getOneRegister(id)
    .then( res => {
    console.log(res)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    let id = document.getElementById("delete-onee").value
    charactersAPI.deleteOneRegister(id)
    .then( res => {
    console.log(res)   
  }) 
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    let name = document.getElementById("editName").value;
    let occupation = document.getElementById("editOccup").value;
    let weapon = document.getElementById("editWeapon").value;
    let cartoon = Boolean(document.getElementById("editCartoon").value);
    charactersAPI.updateOneRegister(name, occupation, weapon, cartoon)          
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let name = document.getElementById("newName").value;
    let occupation = document.getElementById("newOccup").value;
    let weapon = document.getElementById("newWeapon").value;
    let cartoon = Boolean(document.getElementById("newCartoon").value);
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);              
  }
})
