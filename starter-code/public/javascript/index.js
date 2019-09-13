const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    const allChars = charactersAPI.getFullList();
    console.log(allChars);
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const $id = document.querySelector("input[name=character-id]");
    const id = parseInt($id.value);
    const oneChar = charactersAPI.getOneRegister(id);
    console.log(oneChar);
    
    // Get the "characters-container" div
    const $container = document.querySelector(".characters-container");
    // Delete the existing "character-info" div
    $container.removeChild($container.firstChild);
  }
  
  document.getElementById('delete-one').onclick = function(){
    const $id = document.querySelector("input[name=character-id-delete]");
    const id = parseInt($id.value);
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    const $id = document.getElementById('edit-id');
    const id = parseInt($id.value);
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const cartoon = document.getElementById('edit-cartoon').checked;

    charactersAPI.updateOneRegister(id, {id: id, name: name, occupation: occupation, weapon: weapon, cartoon: cartoon});
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
    // Get values from form
    // JSON-server automatically gives them an ID
    const name = document.getElementById('create-name').value;
    const occupation = document.getElementById('create-occupation').value;
    const weapon = document.getElementById('create-weapon').value;
    const cartoon = document.getElementById('create-cartoon').checked;
    charactersAPI.createOneRegister({name: name, occupation: occupation, weapon: weapon, cartoon: cartoon});
  }
})

function appendCharacter(container, charInfo) {
  ;
}