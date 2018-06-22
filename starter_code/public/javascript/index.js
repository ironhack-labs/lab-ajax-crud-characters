const charactersAPI = new APIHandler("http://localhost:8000")

// display a character's information on the page:
function createCharacter(resData){
  let {name, occupation, weapon, cartoon} = resData;
  $('#charactersField').append( 
    `<div class="character-info">
      <div class="name">${name}</div>
      <div class="occupation">${occupation}</div>
      <div class="cartoon">${weapon}</div>
      <div class="weapon">${cartoon}</div>
    </div>`
  );
}

function toggleButtonColour(buttonId, color){
  $(buttonId).toggleClass(color);
  setTimeout(function(){ $(buttonId).toggleClass(color) }, 1000);
}


$(document).ready( () => {

  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList().then( response => {
      toggleButtonColour('#fetch-all','green');
      $('#charactersField').empty()
      for(let i = 0; i < response.length ; i++){ 
        createCharacter(response[i]) 
      }
    })
  }

  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister(document.getElementById('userInputId').value).then( response => {
      $('#charactersField').empty();
      toggleButtonColour('#fetch-one','green');
      createCharacter(response)
    })
  }
  
  document.getElementById('delete-one').onclick = function(){
    charactersAPI.deleteOneRegister(document.getElementById('deleteID').value).then( response => {
      $('#charactersField').empty();
    })
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    // prevent form default behav. of redirectiong after input:
    event.preventDefault();
    // get user inputs to make a character:
    const updatedData = {
      id:         document.getElementById('newId').value,
      name:       document.getElementById('newName').value,
      occupation: document.getElementById('newOccupation').value,
      weapon:     document.getElementById('newWeapon').value,
      cartoon:    document.getElementById('newCartoon').checked
    };
    // add character to the database
    charactersAPI.updateOneRegister(updatedData).then( response => {
      $('#charactersField').empty();
      createCharacter(updatedData);
    })    
  }

  document.getElementById('new-character-form').onsubmit = function(){
    // prevent form default behav. of redirectiong after input:
    event.preventDefault();
    // get user input for new character:
    const characterInfo = {
      name:       document.getElementById('userInputNewName').value,
      occupation: document.getElementById('userInputNewOccupation').value,
      weapon:     document.getElementById('userInputNewWeapon').value,
      cartoon:    document.getElementById('userInputNewIsCartoon').checked
    };
    // add character: 
    charactersAPI.createOneRegister(characterInfo).then( response =>{
      $('#charactersField').empty();
      toggleButtonColour('#send-data','green');
      createCharacter(characterInfo)
      }
    );
  }
})
