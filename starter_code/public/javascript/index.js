const charactersAPI = new APIHandler("http://localhost:8000/characters/");

// Function to CLEAR list of characters before 
// submitting another AXIOS request to list them.
function refreshList () {
  document.getElementsByClassName("characters-container")[0].innerHTML = "";
}

// Function to BUILD CHARACTER BOX
// based on attributes passed in.

// Note that we are INTERPOLATING each of these
// attributes below using the "${attribute}" syntax
function createCharacterBox (character) {
  document.getElementsByClassName("characters-container")[0].innerHTML += `
    <div class="character-info">
      <div class="id">Id: <span>${character.id}</span></div>
      <div class="name">Name: <span>${character.name}</span></div>
      <div class="occupation">Occupation: <span>${character.occupation}</span></div>
      <div class="debt">Debt: <span>${character.debt}</span></div>
      <div class="weapon">Weapon: <span>${character.weapon}</span></div>
    </div>`
}

// Function to LIST ALL CHARACTERS
// Note that there is a call to "createCharacterBox" method within
function listCharacters (characters) {

  // We use a ".forEach" loop to iterate over each of the
  // "character" items and pass each one into the "createCharacterBox"
  // method defined above.
  characters.forEach( (character) => {
    createCharacterBox(character);
  })
}

// Function to create Character Box for one Character
function showCharacter(character) {
  createCharacterBox(character);
}

// Function to verify that all has gone well.
function successOperation (response) {
  console.log("Successful!");
}

  // $(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    refreshList();
    charactersAPI.getFullList()
    .then(response => listCharacters(response));
  }
  
  // Why do we include "e" as an argument to the anonymous function
  // below when we don't in the function above? Is this because
  // there is little risk of an error when pulling a list of all
  // characters?
  document.getElementById('fetch-one').onclick = function(e){
    refreshList();
    
    // What is going on here?
    let id = e.currentTarget.previousSibling.previousSibling.value;

    // We are passing the found "id" into the "getOneRegister" method
    // located in "APIHandler"
    charactersAPI.getOneRegister(id)

    // According to Promises syntax, if the character is found,
    // then we will show that character. (Is this an accurate statement?)
    .then(response => showCharacter(response))
  }
  
  document.getElementById('delete-one').onclick = function(e){
    refreshList();

    // What is going on here?
    let id = e.currentTarget.previousSibling.previousSibling.value;
    
    // Call to method from API Handler
    charactersAPI.deleteOneRegister(id)
    .then(response => successOperation(response))     
  }
  
  // Why do we include "e" as an argument to the anonymous function
  // below?
  document.getElementById('edit-character-form').onsubmit = function(e){
    
    // What is this line of code doing? 
    // Guess: Preventing the original item from being shown instead
    // of the updated one?
    e.preventDefault();
    
    let id = e.currentTarget.querySelector('[name="chr-id"]').value;
    let name = e.currentTarget.querySelector('[name="name"]').value;
    let occupation = e.currentTarget.querySelector('[name="occupation"]').value;
    let weapon = e.currentTarget.querySelector('[name="weapon"]').value;
    let debt = e.currentTarget.querySelector('[name="debt"]').checked;
    let data = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }

    // Call to method from API Handler
    charactersAPI.updateOneRegister(data)
    .then(response => successOperation(response))
  }
  
  // Why do we include "e" as an argument to the anonymous function
  // below?
  document.getElementById('new-character-form').onsubmit = function(e){      
    e.preventDefault();
      let name = e.currentTarget.querySelector('[name="name"]').value;
      let occupation = e.currentTarget.querySelector('[name="occupation"]').value;
      let weapon = e.currentTarget.querySelector('[name="weapon"]').value;
      let debt = e.currentTarget.querySelector('[name="debt"]').value;
      let data = {
        name: name,
        occupation: occupation,
        weapon: weapon,
        debt: debt
      }

      // What is going on here?
      let id = e.currentTarget.previousSibling.previousSibling.value;

      // Call to method from API Handler
      charactersAPI.createOneRegister(data)
      .then(response => successOperation(response))
  }
// })
