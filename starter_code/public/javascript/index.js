const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    var idOne = document.getElementById('idInput').value;
    charactersAPI.getOneRegister(idOne);
  }
  
  document.getElementById('delete-one').onclick = function(){
    var idOneDel = document.getElementById('idOneDelete').value;
    charactersAPI.deleteOneRegister(idOneDel);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    var idOne = document.getElementById('upID').value
    var form = document.getElementById('edit-character-form');
    var nName = form.elements['name'].value
    var nOccupation = form.elements['occupation'].value
    var nWeapon = form.elements['weapon'].value
    var nCartoon = form.elements['cartoon'].checked

    var Obj ={}
    Obj.name = nName
    Obj.occupation = nOccupation
    Obj.weapon = nWeapon
    Obj.cartoon = nCartoon

    charactersAPI.updateOneRegister(idOne, Obj)
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    var form = document.getElementById('new-character-form');
    var nName = form.elements['name'].value
    var nOccupation = form.elements['occupation'].value
    var nWeapon = form.elements['weapon'].value
    var nCartoon = form.elements['cartoon'].checked

    var Obj ={}
    Obj.name = nName
    Obj.occupation = nOccupation
    Obj.weapon = nWeapon
    Obj.cartoon = nCartoon

    charactersAPI.createOneRegister(Obj);        
  }
})
