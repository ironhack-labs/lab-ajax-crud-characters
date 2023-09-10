// const router = require("express").Router();
const ApiService = require("./service/APIHandler");
const apiService = new ApiService();

//const apiService = new ApiService(http://localhost:8000);
//class constructor(baseUrl)


//All Characters
const fetchAllButton = document.getElementById("fetch-all");

fetchAllButton.addEventListener("click", (event)=> { 

    apiService
    .getFullList()
    .then((response) => {
      const characters = response.data;
      console.log(characters); 
    
    const characterContainer = document.querySelector(".characters-container")
    characterContainer.innerHTML = "";
    //Clear the previous content
    
    characters.forEach  ((character) => {
        const characterInfo = `<div class="character-info">
    <div class ="id">Id:<span>${character.id}</span></div>
    <div class="name">Character Name:<span> ${character.name}</span></div>
    <div class="occupation">Character Occupation:<span> ${character.occupation}</span></div>
    <div class="cartoon">Is a Cartoon:<span>${character.cartoon}</span></div>
    <div class="weapon">Character Weapon:<span> ${character.weapon}</span></div>
    </div>`;
    
    characterContainer.innerHTML += characterInfo
    
    })
    
    })
    
    .catch((err) => console.log(err));
    


})

//One Characters
const fetchOneButton = document.getElementById("fetch-one");

fetchOneButton.addEventListener("click", (event)=> { 


const characterId = document.querySelector("[name=character-id]").value;
//(now no value on html) When a user interacts with the HTML page and enters some text into the <input> field, 
// the user's input becomes the current value of the <input> element.
console.log(characterId);

    apiService
    .getOneRegister(characterId)
    .then((response) => {
      const characters = response.data;
      console.log(characters); 
    
    const characterContainer = document.querySelector(".characters-container")
    
    characters.forEach  ((character) => {
        const oneCharacterInfo = `<div class="character-info">
        <div class ="id">Id:<span>${character.id}</span></div>
        <div class="name">Character Name:<span> ${character.name}</span></div>
        <div class="occupation">Character Occupation:<span> ${character.occupation}</span></div>
        <div class="cartoon">Is a Cartoon:<span>${character.cartoon}</span></div>
        <div class="weapon">Character Weapon:<span> ${character.weapon}</span></div>
      </div>`;

      characterContainer.innerHTML += oneCharacterInfo
    
    })
    
    })
    .catch((err) => console.log(err));

})

//Delete
const deleteButton = document.getElementById("delete-one");

deleteButton.addEventListener("click", (event)=> { 

const characterId = document.querySelector("[character-id-delete]").value;
console.log(characterId);

    apiService
    .deleteOneRegister(characterId)
    .then(() => {
        deleteOneButton.style.backgroundColor = "green";
    })

    .catch((err) => {
        deleteOneButton.style.backgroundColor = "red";
        console.log(err)  
    });

})

//Create new character
const createForm = document.getElementById("new-character-form");
const createButton = document.querySelector("#new-character-form #send-data")

createForm.addEventListener("submit", (event)=> { 

    event.preventDefault();



    const name = document.querySelector("#new-character-form input[name=name]").value
      const occupation = document.querySelector("#new-character-form input[name=occupation]").value
      const weapon = document.querySelector("#new-character-form input[name=weapon]").value
      const cartoon = document.querySelector("#new-character-form input[name=cartoon]").checked

    apiService
    .createOneRegister({name, occupation, weapon, cartoon})
    .then((newCharacter) => {
        
        createButton.style.backgroundColor = "green"

    })
    .catch((err) => {
        createButton.style.backgroundColor = "red";
        console.log(err)  
    });

})

//edit character

const editForm  = document.getElementById("edit-character-form")
const editButton = document.querySelector("#edit-character-form #send-data")

editForm.addEventListener("submit", (event)=> { 

    event.preventDefault();


  const id = document.querySelector("#edit-character-form input[name=chr-id]").value
  const name = document.querySelector("#edit-character-form input[name=name]").value
  const occupation = document.querySelector("#edit-character-form input[name=occupation]").value
  const weapon = document.querySelector("#edit-character-form input[name=weapon]").value
  const cartoon = document.querySelector("#edit-character-form input[name=cartoon]").checked

  apiService
  .updateOneRegister( id, { name, occupation, weapon, cartoon })
  .then(updatedCharacter => {
    editButton.style.backgroundColor = "green"
  })
  .catch(err => {
    editButton.style.backgroundColor = "red"
  })
});

















