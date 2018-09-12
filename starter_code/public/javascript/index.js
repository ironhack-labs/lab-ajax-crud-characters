// const charactersAPI = new APIHandler("http://localhost:8000")
const myApiHandler = new APIHandler('https://ih-crud-api.herokuapp.com/characters')
let charObject;

function fetchAll(characterData) {
  // console.log(characterData)
  const theResultDiv = document.getElementsByClassName('characters-container')[0];
  theResultDiv.innerHTML = "";
  characterData.forEach((eachThing)=>{
  theResultDiv.innerHTML +=
  `<div class="character-info">
      <div class="name">Name: ${eachThing.name}</div>
      <div class="occupation">Occupation: ${eachThing.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${eachThing.debt}</div>
      <div class="weapon">Weapon: ${eachThing.weapon}</div>
    </div>`});
}
function printError() {
  // console.log($('.characters-container'))
  $('.characters-container').html('<h2 style="color:red;">Sorry, no character matches this ID</h2>'); 
}
function fetchOne(characterData) {
  // console.log(characterData)
  const theResultDiv = document.getElementsByClassName('characters-container')[0];
  theResultDiv.innerHTML = "";
  theResultDiv.innerHTML =
  `<div class="character-info">
      <div class="name">Name: ${characterData.name}</div>
      <div class="occupation">Occupation: ${characterData.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${characterData.debt}</div>
      <div class="weapon">Weapon: ${characterData.weapon}</div>
    </div>`;
}

$(document).ready( () => {
  
  document.getElementById('fetch-all').onclick = function(){
    myApiHandler.getFullList(); // all functions must be inside promise
   
}
  document.getElementById('fetch-one').onclick = function(){
    let inputID =$('#character-id')[0].value
    // console.log(inputID)
    myApiHandler.getOneRegister(inputID)
  }
  
  document.getElementById('delete-one').onclick = function(){
    let inputID =$('#delete-character')[0].value
    myApiHandler.deleteOneRegister(inputID)
  }
  
  document.getElementById('update-data').onclick = function(){
    let theId=$('#editId')[0].value;
    let theName=$('#editName')[0].value;
    let theOccupation =$('#editOccupation')[0].value;
    let theWeapon =$('#editWeapon')[0].value
    let charObject = {
          name: theName,
          occupation: theOccupation,
          weapon:theWeapon,
        }
    myApiHandler.updateOneRegister(theId, charObject)
  }
  
  document.getElementById('send-data').onclick = function(){
    let theName=$('#newName')[0].value;
    let theOccupation =$('#newOccupation')[0].value;
    let theWeapon =$('#newWeapon')[0].value
    let charObject = {
      name: theName,
      occupation: theOccupation,
      weapon:theWeapon,
    }
    myApiHandler.createOneRegister(charObject);
  }
})
