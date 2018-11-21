const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
 let node = document.querySelector(".characters-container");

 document.getElementById("fetch-all").onclick = function() {
   charactersAPI.getFullList().then(characters => {

     node.innerHTML="";

     for (var i = 0; i < characters.length; i++) {
       let characterInfo = `<div class="character-info">
     <div class="name">${characters[i].name}</div>
     <div class="occupation">${characters[i].occupation}</div>
     <div class="cartoon">${characters[i].cartoon}</div>
     <div class="weapon">${characters[i].weapon}</div>
   </div>`;
       node.innerHTML += characterInfo;
     }
   });
 };

 document.getElementById("fetch-one").onclick = function() {
  
  const fetchId = document.querySelector('.operation input').value;
   
  charactersAPI.getOneRegister(fetchId)
   .then((character)=>{
     let characterInfo = `<div class="character-info">
     <div class="name">${character.name}</div>
     <div class="occupation">${character.occupation}</div>
     <div class="cartoon">${character.cartoon}</div>
     <div class="weapon">${character.weapon}</div>
   </div>`;
       node.innerHTML = characterInfo;
   })
   .catch((err)=>{
     return (err);
   })

 };

 document.getElementById("delete-one").onclick = function() {
   charactersAPI.deleteOneRegister();
 };

 document.getElementById("edit-character-form").onsubmit = function() {
   charactersAPI.updateOneRegister();
 };

 document.getElementById("new-character-form").onsubmit = function() {

  let name = document.querySelector('#new-character-form .name').value;
  let occupation = document.querySelector('#new-character-form .occupation').value;
  let weapon = document.querySelector('#new-character-form .weapon').value;
  let cartoon = document.querySelector('#new-character-form .cartoon').checked;
  

  let dbCharacter = {name: name, occupation: occupation, weapon: weapon, cartoon: cartoon};

   charactersAPI.createOneRegister(dbCharacter)
   .then(()=>{
     console.log('succesfully created the new entry');
   })
   .catch((err)=>{
     console.log('An error occurred while attempting to create a new entry: ' + err);
   });
 };
});