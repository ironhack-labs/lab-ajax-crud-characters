const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com/characters")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then(data => {

    }) 
  }
  
  document.getElementById('fetch-one').onclick = function(){
    let elFetchOne = document.querySelector("input[name='character-id']").value;
    charactersAPI.getOneRegister(elFetchOne).then(data => {
      let elName = document.getElementsByClassName('name');
      elName[0].innerHTML = data.data.name;
      let elOccupation = document.getElementsByClassName('occupation');
      elOccupation[0].innerHTML = data.data.occupation ;
      let elWeapon = document.getElementsByClassName('weapon');
      elWeapon[0].innerHTML = data.data.weapon;
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
     let elDeleteOne = document.querySelector("input[name='character-id-delete']").value;
     charactersAPI.deleteOneRegister(elDeleteOne).then(() => {
       console.log("Character deleted")
     })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    let elNewName = document.querySelector("input[name='name']").value;
    console.log(elNewName);
    let elNewOccupation = document.querySelector("input[name='occupation']").value;
    let elNewWeapon = document.querySelector("input[name='weapon']").value;
    let elNewCartoon = document.querySelector("input[name='cartoon']").value;
    let newObject = { name: elNewName, occupation: elNewOccupation, weapon: elNewWeapon}
    charactersAPI.createOneRegister(elNewCharacterForm).then(data => {

    })          
  }
})
