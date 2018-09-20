const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    $(".character-info").detach();
    
    charactersAPI.getFullList()
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let charID = document.getElementById('fetch-one-value').value;
    $(".character-info").detach();
    charactersAPI.getOneRegister(charID);
  }
  
  document.getElementById('delete-one').onclick = function(){
    event.preventDefault();
    $(".character-info").detach();
    let ID = document.getElementById("delete-value").value;
    charactersAPI.deleteOneRegister(ID)
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();
    $(".character-info").detach();
    let ID = document.getElementById("updateID").value;
    let name = document.getElementById("updateName").value;
    let occupation = document.getElementById("updateOccupation").value;
    let weapon = document.getElementById("updateWeapon").value;
    let cartoon = document.getElementById("updateCartoon").checked;
    charactersAPI.updateOneRegister(ID, name, occupation, weapon, cartoon);
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();
    $(".character-info").detach();
    let name = document.getElementById("nameCreate").value;
    let occupation = document.getElementById("occupationCreate").value;
    let weapon = document.getElementById("weaponCreate").value;
    let cartoon = document.getElementById("cartoonCreate").checked;   
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon);
  }
})
